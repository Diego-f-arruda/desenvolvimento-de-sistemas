import Link from "next/link";
import "./home.css";

import Person from "@/Components/Person";

export default function Home() {
  return (
     <div>
        <h1>HOME</h1>
        <Link href="/login">
          <button>Login</button>
        </Link>

        <div className="container">
          <Person nome = {"Diego"} idade={35}/>
          <Person nome={"Alice "} idade={3}/>
          <Person nome={"Juliana"} idade={36}/>
          

        </div>
     </div>
  );
}
