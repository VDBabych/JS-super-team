import { refs} from "./refs-homepage";


const openModalStudents = () => {
  refs.studentModal.classList.remove("visually-hidden");
  document.addEventListener('keydown', onEscDownStudentModal);
  refs.backdropStudents.addEventListener('click', onBackdropStClick);
}

function closeModalStudents () {
  document.removeEventListener('keydown', onEscDownStudentModal);
  refs.studentModal.classList.add('visually-hidden');
  refs.backdropStudents.removeEventListener('click', onBackdropStClick);
}

function onEscDownStudentModal(e) {
  if (e.code === 'Escape') {
    closeModalStudents();
  }
}

function onBackdropStClick(e) {
  if (e.target.classList.contains("backdrop_students")) {
    closeModalStudents();
  }
  if (e.target.closest('.modal__btn-close')) {
    closeModalStudents();
  }
}


refs.studentLink.addEventListener('click', openModalStudents);
