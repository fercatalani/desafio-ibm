import { div } from 'prelude-ls'
import React from 'react'
import './css/style.css'
import book from '../../assets/images/book.svg' // relative path to image 

export default function Form() {
    return (
        <div className="screen">
            <section className="image">
                <img src={book} alt={"logo"} />
                <h2>Cadastre seus livros</h2>
            </section>

            <section className='FormS'>
                <form>
                    <h2>API Livro-Teste</h2>
                    <div>
                        <label>Livro</label>
                        <input /><br />
                    </div>
                    <div><label>Autor</label>
                        <input /><br /></div>

                    <div>
                        <label>Valor</label>
                        <input /><br />
                    </div>
                    <div>
                        <label>Descrição:</label>
                        <input /><br />
                    </div>
                    <button>Cadastrar</button>
                </form>
            </section>
        </div>
    )
}