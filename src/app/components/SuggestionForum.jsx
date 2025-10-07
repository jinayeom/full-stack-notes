"use client";
import { useEffect, useMemo, useState } from "react";

export default function SuggestionForum() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("FEATURE");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Load from API on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/suggestions", { cache: "no-store" });
        const data = await res.json();
        if (data.ok) {
          // normalize created_at -> createdAt for UI
          setSuggestions(
            (data.rows || []).map((r) => ({
              ...r,
              createdAt: r.created_at ? new Date(r.created_at).getTime() : r.createdAt ?? Date.now(),
            }))
          );
        } else {
          setToast(data.error || "Failed to load suggestions");
          setTimeout(() => setToast(""), 3000);
        }
      } catch {
        setToast("Network error loading suggestions");
        setTimeout(() => setToast(""), 3000);
      }
    })();
  }, []);

  // -------- Validation --------
  function validate() {
    const e = {};
    if (!title.trim()) e.title = "Title is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    const len = message.trim().length;
    if (len < 10) e.message = "Message must be at least 10 characters";
    if (len > 300) e.message = "Message cannot exceed 300 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // -------- Submit (ONLY this version; removed the duplicate) --------
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, email, type, message }),
      });
      const data = await res.json();
      if (!data.ok) {
        const firstErr =
          data.errors?.title ||
          data.errors?.email ||
          data.errors?.message ||
          data.error ||
          "Failed to submit";
        setToast(firstErr);
        setTimeout(() => setToast(""), 3000);
        return;
      }

      // Refresh list after save
      const res2 = await fetch("/api/suggestions", { cache: "no-store" });
      const data2 = await res2.json();
      if (data2.ok) {
        setSuggestions(
          (data2.rows || []).map((r) => ({
            ...r,
            createdAt: r.created_at ? new Date(r.created_at).getTime() : r.createdAt ?? Date.now(),
          }))
        );
      }

      // Reset form
      setTitle("");
      setEmail("");
      setType("FEATURE");
      setMessage("");
      setErrors({});
      setToast("Thanks! Your suggestion has been submitted.");
      setTimeout(() => setToast(""), 3000);
    } catch {
      setToast("Network error submitting suggestion");
      setTimeout(() => setToast(""), 3000);
    }
  }

  // -------- Filters & sorting --------
  const [filterType, setFilterType] = useState("ALL");
  const [sortKey, setSortKey] = useState("newest");

  const visibleSuggestions = useMemo(() => {
    let data = [...suggestions];
    if (filterType !== "ALL") data = data.filter((s) => s.type === filterType);
    if (sortKey === "newest") data.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
    else if (sortKey === "oldest") data.sort((a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0));
    else if (sortKey === "title") data.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    return data;
  }, [suggestions, filterType, sortKey]);

  function removeSuggestion(id) {
    // Optional: this only removes from UI; add a DELETE API later if you want persistence.
    setSuggestions((prev) => prev.filter((s) => s.id !== id));
  }

  function clearAll() {
    // Optional: same note as above.
    if (confirm("Clear list in the UI? (Does not delete from DB)")) setSuggestions([]);
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-4">Suggestion Forum</h1>

      {toast && <div className="rounded-lg bg-green-100 p-3 text-sm">{toast}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg shadow" noValidate>
        <div>
          <label className="block text-sm font-medium">Title*</label>
          <input
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-xs text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Type of Request*</label>
          <select
            className="w-full border rounded p-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="FEATURE">Request for Additional Features</option>
            <option value="EDIT">Suggestion for Edits</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Message*</label>
          <textarea
            rows={5}
            className="w-full border rounded p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={300}
            placeholder="Enter up to 300 characters"
          />
          <p className="text-xs text-gray-500 text-right">{message.length}/300</p>
          {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Community Suggestions</h2>
          <div className="flex gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border rounded p-1"
            >
              <option value="ALL">All</option>
              <option value="FEATURE">Features</option>
              <option value="EDIT">Edits</option>
              <option value="OTHER">Other</option>
            </select>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="border rounded p-1"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="title">Title A–Z</option>
            </select>
            <button onClick={clearAll} className="border px-2 py-1 rounded">
              Clear All
            </button>
          </div>
        </div>

        {visibleSuggestions.length === 0 ? (
          <p className="text-sm text-gray-600">No suggestions yet.</p>
        ) : (
          <ul className="space-y-3">
            {visibleSuggestions.map((s) => (
              <li key={s.id || s.createdAt} className="border rounded p-3">
                <div className="flex justify-between">
                  <div>
                    <strong>{s.title}</strong>
                    <p className="text-xs text-gray-500">
                      {new Date(s.createdAt ?? Date.now()).toLocaleString()} {s.email ? `• ${s.email}` : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => removeSuggestion(s.id)}
                    className="text-xs border px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-sm mt-2 whitespace-pre-wrap">{s.message}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
