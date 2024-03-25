import Swal from 'sweetalert2';


export const moveToLink =  (thisLink : string) => {
    const link = document.createElement('a');

    link.href = thisLink;
    link.target = '_blank';

    document.body.appendChild(link);
    
    link.click();
  }

  export const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      Swal.fire({
        title: "¡User de Discord copiado!",
        text: "Utiliza ese user para buscarme en Discord y estar en contacto.",
        icon: "success",
        width: 600,
        padding: "2em",
        color: "#CD60D8",
      });
      
    } catch (error) {
      console.error('Error al copiar el texto: ', error);
    }
  };

  export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };