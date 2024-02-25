import Layout from "@/app/page";
import Link from "next/link";

export default function NavBar() {
  return (
      <nav>
        <ul className="flex justify-center p-6">
          <li>
            <Link className="p-4" href="/persons">
                Persons 
            </Link>
          </li>
          <li>
            <Link className="p-4" href="/saved-persons">
              Saved
            </Link>
          </li>
        </ul>
      </nav>
  );
}
