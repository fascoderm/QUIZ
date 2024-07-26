let formDataSubmit = (e) => {
  e.preventDefault();
  let radios_1 = document.getElementsByName('HTML');
  let radios_2 = document.getElementsByName('CSS');
  let radios_3 = document.getElementsByName('TAILWIND');
  let radios = [...radios_1, ...radios_2, ...radios_3];
  let selectedOption = [];
  radios.map(radio => {
    if(radio.checked){
      selectedOption.push(Number(radio.value));
    }
  })
  let score = selectedOption.reduce((total,currentTotal) => total + currentTotal, 0);
  return alert(`you scored ${score} out of ${selectedOption.length}`);
}