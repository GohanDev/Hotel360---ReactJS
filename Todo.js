import { useEffect, useState } from "react";
import {deleteTarefasApi, getTarefasApiPaged,} from "../service/api";

//Imports para os modals
import BemVindo from "./html/BemVindo";
import ModalsTodo from "./html/ModalsTodo";

var taskReference = {id: 0, descricao: "", dataConclusao: ""};

function Todo() {
  const [listaTarefas, setLista] = useState([{ ...taskReference }]);

  //Variaveis eliminar ou editar tarefas
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idTaskDel, setIdTaskDel] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({ ...taskReference });

  const [paginaAtual, setPaginaAtual] = useState(0);
  const [numTotalPaginas, setNumTotalPaginas] = useState(0);

  //É chamado quando o deleteModal fecha
  const handleCloseDeleteModal = (isToDelete) => {
    if (isToDelete) {
      deleteTarefasApi(idTaskDel)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (!res.success) {
            alert(res.message);
          }
        });
    }

    setShowDeleteModal(false);
  };
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  //É chamado a primeira vez que o user carrega no botão
  const handleDeleteTarefa = (id) => {
    setIdTaskDel(id);
    handleShowDeleteModal();
  };

  //É chamado a primeira vez que o user carrega no botão
  const handleEditTarefa = (tarefa) => {
    setTaskToEdit({ ...tarefa });
    setShowEditModal(true);
  };

  //Atualiza a lista de tarefas da API
  const handleGetListaTarefas = () => {
    getTarefasApiPaged(paginaAtual)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLista(res.rows);
        setNumTotalPaginas(res.message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    handleGetListaTarefas();
  }, [paginaAtual]);

  let arrayPaginacao = [];
  for (let i = 0; i < numTotalPaginas; i++)
    arrayPaginacao.push(
      <li class="page-item" onClick={() => setPaginaAtual(i)}>
        <a class="page-link">{i + 1}</a>
      </li>
    );

  return (
    <>
      <BemVindo/>
      
      <ul className="mt-5" style={{ overflowY: "scroll", height: "60vh" }}>
        {listaTarefas.map((tarefa) => {})}
      </ul>

      <ModalsTodo
        handleCloseDeleteModal={handleCloseDeleteModal}
        idTaskDel={idTaskDel}
        setShowEditModal={setShowEditModal}
        setTaskToEdit={setTaskToEdit}
        taskToEdit={taskToEdit}
        showDeleteModal={showDeleteModal}
        showEditModal={showEditModal}
      />
    </>
  );
}
export default Todo;
