function toggleCard(row) {
        if (
          row.nextElementSibling &&
          row.nextElementSibling.classList.contains("card-row")
        ) {
          row.nextElementSibling.remove();
          return;
        }
        const existingCardRow = document.querySelector(".card-row");
        if (existingCardRow) existingCardRow.remove();

        const cardRow = document.createElement("tr");
        cardRow.classList.add("card-row");
        const cardCell = document.createElement("td");
        cardCell.colSpan = 4;
        const controlPeriod = row.children[4].textContent;
        const schedule = row.children[5].textContent;
        const latestProgress = row.children[6].textContent;
        cardCell.innerHTML = `
          <div class="card">
            <div class="card-item">
              <span class="card-item-title">中央核定補助計畫管制期程：</span>${controlPeriod}
            </div>
            <div class="card-item">
              <span class="card-item-title">預定期程：</span>${schedule}
            </div>
            <div class="card-item">
              <span class="card-item-title">最新執行情形：</span>${latestProgress}
            </div>
          </div>
        `;
        cardRow.appendChild(cardCell);
        row.parentNode.insertBefore(cardRow, row.nextSibling);
      }

      function goBack() {
        window.history.back();
      }