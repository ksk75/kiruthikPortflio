export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-secondary bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-primary-text font-bold text-lg">
          Kiruthik Kumar<span className="text-accent">.</span>
        </div>
        
        <div className="text-muted-text text-sm">
          © {new Date().getFullYear()} Kiruthik Kumar. All rights reserved.
        </div>
        
        <div className="text-muted-text text-xs font-mono">
          Built with Next.js, TypeScript & Framer Motion.
        </div>
      </div>
    </footer>
  );
}
