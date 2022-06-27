
        alert ('Heroi salvooo com sucessoo amigoo')
        } catch (err) {
            alert(err.respose.data.erro);
        }
    }
}

Return(
    <div>
        <h1> CADASTRE SEU HEROI PREFERIDO AI!</h1>
    
        <div>
    <label>qual nome?</label>
    <input type='text' value= {nome} onChange={e => setNome(e.target.value)}/>
    </div>
    <br/>
    <div>
        <label>qual o poder deleee?</label>
        <input type='text' value= {poder} onChange={e => setPoder(e.target.value)}/>
        <br/>
    </div>
    <div>
    <label>Voa ? 1 para sim e 0 para não</label>
    <br/>
    <input type= 'text' value={voa} onChange={e=>setVoa(e.target.value)}/>
    </div>
    <button>onClick ={salvarClick}salvaaa</button>
    <Link to= '/contato'>Herois registrados com sucessoo</Link>
    </div>
)
