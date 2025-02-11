// Määrittele pollausväli (millisekunteina)
const POLLING_INTERVAL = 2000;

// Haetaan tagien data ja päivitetään DOM
async function fetchTags() {
  try {
    const response = await fetch('/get-tags');
    const data = await response.json();

    const tagContainer = document.getElementById('tagContainer');

    // Jos palvelin palauttaa esim. { "error": ... }
    if (data.error) {
      tagContainer.textContent = `Virhe: ${data.error}`;
      return;
    }

    // Oletetaan, että data on lista tageja (Array).
    if (Array.isArray(data)) {
      if (data.length === 0) {
        tagContainer.textContent = 'Ei vastaanotettuja tagitietoja.';
      } else {
        // Muotoillaan jokainen tagi JSON-stringiksi
        const formatted = data
          .map(tag => JSON.stringify(tag, null, 2))
          .join('\n');
        tagContainer.textContent = formatted;
      }
    } else {
      // Jos data on jotain muuta kuin array 
      tagContainer.textContent = JSON.stringify(data, null, 2);
    }

  } catch (err) {
    console.error('Virhe tagien haussa:', err);
  }
}

// Säännöllinen pollaus
setInterval(fetchTags, POLLING_INTERVAL);

// Jos haluat kirjoittaa tageja, tähän funktio
// (poistettu nyt, kun keskitytään vain lukemiseen)

document.addEventListener('DOMContentLoaded', () => {
  // Heti sivun ladatessa haetaan tagit
  fetchTags();
});