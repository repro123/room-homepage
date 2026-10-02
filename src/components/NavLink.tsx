export default function NavLink({ link }: { link: string }) {
  return (
    <li className="font-bold">
      <a href="#" className="hover:underline underline-offset-8 decoration-2">
        {link}
      </a>
    </li>
  );
}
