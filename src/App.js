import { useState } from "react";
import "./App.css";

function App() {
  const [diag, setDiag] = useState("");
  const [click, setClick] = useState(true);

  const HandleSubmit = (e) => {
    setClick(false);
    e.preventDefault();

    const relatorio = {
      pergunta1: Number(e.target.sensorial.value),
      pergunta2: Number(e.target.umidade.value),
      pergunta3: Number(e.target.atividade.value),
      pergunta4: Number(e.target.mobilidade.value),
      pergunta5: Number(e.target.nutrição.value),
      pergunta6: Number(e.target.friccao.value),
    };

    var pontuacao =
      relatorio.pergunta1 +
      relatorio.pergunta2 +
      relatorio.pergunta3 +
      relatorio.pergunta4 +
      relatorio.pergunta5 +
      relatorio.pergunta6;

    console.log(pontuacao);

    if (pontuacao < 11) {
      setDiag("alto");
    } else if (pontuacao >= 12 && pontuacao <= 14) {
      setDiag("medio");
    } else {
      setDiag("baixo");
    }

    console.log(diag);
  };

  return (
    <>
      <div className="main">
        <div className="title">
          <img width="60" src="https://i.postimg.cc/902YGsXq/curativo.png" />
          {click ? <h1> Escala de Braden </h1> : <h1> Diagnóstico</h1>}
          <img width="60" src="https://i.postimg.cc/902YGsXq/curativo.png" />
        </div>

        {click ? (
          <form
            method="POST"
            onSubmit={HandleSubmit}
            className="formpibic"
            name="formpibic"
            id="formpibic"
          >
            <label> Percepção sensorial </label>
            <select id="sensorial">
              <option value="1"> Totalmente limitado </option>
              <option value="2"> Muito limitado</option>
              <option value="3"> Levemente limitado </option>
              <option value="4"> Nenhuma limitação </option>
            </select>

            <label> Umidade </label>
            <select id="umidade">
              <option value="1"> Completamente molhado </option>
              <option value="2"> Muito molhado</option>
              <option value="3"> Ocasionalmente molhado </option>
              <option value="4"> Raramente molhado </option>
            </select>

            <label> Atividade </label>
            <select id="atividade">
              <option value="1"> Acamado</option>
              <option value="2"> Confinado à cadeira</option>
              <option value="3"> Anda ocasionalmente </option>
              <option value="4"> Anda frequentemente </option>
            </select>

            <label> Mobilidade </label>
            <select id="mobilidade">
              <option value="1"> Totalmente imóvel </option>
              <option value="2"> Bastante limitada </option>
              <option value="3"> Levemente limitada </option>
              <option value="4"> Não apresenta limitações </option>
            </select>

            <label> Nutrição </label>
            <select id="nutrição">
              <option value="1"> Muito pobre </option>
              <option value="2"> Provavelmente inadequada</option>
              <option value="3"> Adequada </option>
              <option value="4"> Excelente </option>
            </select>

            <label> Fricção e Cisalhamento </label>
            <select id="friccao">
              <option value="1"> Problema </option>
              <option value="2"> Problema com potencial </option>
              <option value="3"> Adequada </option>
              <option value="4"> Nenhum problema </option>
            </select>

            <button type="submit"> Gerar Resultado </button>
          </form>
        ) : (
          <>
            <div id="dig">
              {diag == "alto" && (
                <>
                  {" "}
                  <h1 className="alto">
                    {" "}
                    O seu cliente possui um alto risco de adquirir lesão por
                    pressão!! Clique no botão "intervenções" para a prática da
                    prevenção.
                  </h1>{" "}
                  <img src="https://media1.tenor.com/m/piCXvK3ABIUAAAAC/be-doo-be-doo-minion.gif" />{" "}
                </>
              )}
              {diag == "medio" && (
                <>
                  {" "}
                  <h1 className="medio">
                    {" "}
                    O seu cliente possui risco moderado de adquirir lesão por
                    pressão Clique no botão "intervenções" para a prática da
                    prevenção.
                  </h1>{" "}
                  <img src="https://media1.tenor.com/m/2ER74Ee4Ou0AAAAC/hmmnotbad-hmm.gif" />{" "}
                </>
              )}

              {diag == "baixo" && (
                <>
                  {" "}
                  <h1 className="baixo">
                    {" "}
                    O seu cliente possui baixo risco de adquirir lesão por
                    pressão Clique no botão "intervenções" para a prática da
                    prevenção.
                  </h1>{" "}
                  <img src="https://media.tenor.com/jg0-zHyA_8oAAAAi/winnie-the-pooh-pooh-bear.gif" />{" "}
                </>
              )}

              <a href="">
                <button> VOLTAR </button>
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
