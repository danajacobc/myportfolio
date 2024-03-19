export const moveToLink =  (thisLink : string) => {
    const link = document.createElement('a');

    link.href = thisLink;
    link.target = '_blank';

    document.body.appendChild(link);
    
    link.click();
  }

  