"use client";
import SuggestionForum from "../components/SuggestionForum";

export default function SuggestionsPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-6">Suggestion Forum</h1>
      <SuggestionForum />
    </main>
  );
}