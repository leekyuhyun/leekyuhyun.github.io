import { CONTACT_DATA } from "../data/contact";

export default function Contact() {
  const { items } = CONTACT_DATA;

  return (
    <section>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">
        Contact
      </h2>
      <ul className="flex flex-col gap-2 text-2xl">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col gap-0 leading-tight">
            <span className="font-bold text-slate-500 dark:text-slate-400">
              {item.label}
            </span>
            <a 
              href={item.href}
              target={item.label === "Github" || item.label === "Blog" ? "_blank" : "_self"}
              rel="noreferrer"
              className="text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors break-all"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
