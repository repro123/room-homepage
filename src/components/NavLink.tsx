export default function NavLink({ link }: { link: string }) {
  return (
    <li className="font-bold">
      <a href="#">{link}</a>
    </li>
  );
}
