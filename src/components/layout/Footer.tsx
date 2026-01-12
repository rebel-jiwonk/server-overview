export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="max-w-[92rem] mx-auto py-8 text-sm text-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Rebellions. All rights reserved.</p>
        <p>
          Designed with <span className="text-white">Science Gothic</span> and Tailwind.
        </p>
      </div>
    </footer>
  );
}




