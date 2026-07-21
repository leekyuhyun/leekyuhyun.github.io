import { CONTACT_DATA } from "../data/contact";

export default function Contact() {
  const { items } = CONTACT_DATA;

  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3 border-b border-slate-200 dark:border-slate-700 pb-2 uppercase tracking-wider">
        Contact
      </h2>
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target={item.label === "Github" || item.label === "Blog" ? "_blank" : "_self"}
              rel="noreferrer"
              className="block px-3 py-2 -mx-3 text-lg md:text-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-bold">{item.label}</span>
                <span className="text-base md:text-lg opacity-80 font-medium">{item.value}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
