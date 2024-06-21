import { useState } from "react";
import { createTarefaApi } from "../../service/api";

export default function CreateTarefa() {
    const [desc, setDesc] = useState('');
    const [dataConc, setDataConc] = useState(new Date().toISOString().split("T")[0]);

    //Adiciona tarefa na api
    const handleCreateTarefa = () => {
        if (desc == '') {
            alert("Preencha a descrição da tarefa pretendida");
            return
        }
        let tarefa = { descricao: desc, "dataConclusao": new Date(dataConc).toJSON() };
        createTarefaApi(tarefa)
            .then(res => res.json())
            .then(res => {
                setDesc('');
                alert('Tarefa criada com sucesso');
            });
    }

    return <>
        <hr />
        <div className="row">
            <div className="col-md-2">
                <p>Descrição: </p>
            </div>
            <div className="col-md-4">
                <input className="form-control" type="text" value={desc} onChange={evt => setDesc(evt.target.value)} />
            </div>

            <div className="col-md-3">
                <p>Data de Conclusão: </p>
            </div>
            <div className="col-md-3">
                <input className="form-control" type="date" value={dataConc} onChange={evt => setDataConc(evt.target.value)} />
            </div>
        </div>

        <div className="row">
            <div className="col-md-3">
                <button type="button" onClick={() => { handleCreateTarefa() }} class="btn btn-secondary">Criar tarefa</button>
            </div>
        </div>
    </>;
}