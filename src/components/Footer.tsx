import { PROFILE_DATA } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-10 text-center text-2xl text-slate-400 print:hidden">
      © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
    </footer>
  );
}
