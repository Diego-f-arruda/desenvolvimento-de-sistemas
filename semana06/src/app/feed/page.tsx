
import Image from "next/image";
import Header from "../../Components/Header"
import "./styles.css";

import cover from '@/assets/cover.avif'
import Avatar from '@/Components/avatar'

export default function Feed(){
    return(
        <div>
            <Header />  
            <div className="container">
                <aside className="cardProfile">
                    <Image src={cover} alt="cover" className="cover"></Image>
                    <Avatar src="https://github.com/Diego-f-arruda.png" hasBorder= {true}/>
                </aside>

                <main className="main">


                </main>

            </div>
        
        </div>

    )
}

