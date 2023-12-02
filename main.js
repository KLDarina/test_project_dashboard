const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
  {
    name: "Delilah Fulton",
    company: "Elementum Associates",
    phone: "(963) 132-1307",
    email: "vel.quam@aol.net",
    country: "France",
    status: "Inactive",
  },
  {
    name: "Macon William",
    company: "Nunc PC",
    phone: "1-456-588-8922",
    email: "poitor@protmail.com",
    country: "Colombia",
    status: "Active",
  },
  {
    name: "Ora Joyce",
    company: "Sed Corp.",
    phone: "(965) 839-8869",
    email: "non.sapien@google.net",
    country: "Costa Rica",
    status: "Inactive",
  },
  {
    name: "Wynter Todd",
    company: "Enim Suspendisse LLC",
    phone: "1-675-205-8863",
    email: "tempor@aol.net",
    country: "Chile",
    status: "Inactive",
  },
  {
    name: "Jamal Mayer",
    company: "Commod Corporation",
    phone: "1-223-340-5511",
    email: "etiam@outlook.couk",
    country: "Spain",
    status: "Inactive",
  },
  {
    name: "Kato James",
    company: "Ligula Nullam Corp.",
    phone: "1-423-638-6328",
    email: "pretium.neque@google",
    country: "Peru",
    status: "Inactive",
  },
  {
    name: "Jermaine Cole",
    company: "Nulla Institute",
    phone: "(666) 945-6066",
    email: "purus.libero@aol.edu",
    country: "Pakistan",
    status: "Inactive",
  },
  {
    name: "Kalia Estes",
    company: "Pede Ultrices A Limited",
    phone: "(577) 911-6289",
    email: "velit@hotmail.couk",
    country: "Nigeria",
    status: "Inactive",
  },
  {
    name: "Darryl Perkins",
    company: "Tempor Est Inc.",
    phone: "(823) 543-7873",
    email: "mauris@google.couk",
    country: "Nigeria",
    status: "Inactive",
  },
  {
    name: "Jemima Sloan",
    company: "Nec Tempus Associates",
    phone: "(945) 670-8276",
    email: "aliquam@protonmail.net",
    country: "Indonesia",
    status: "Active",
  },
  {
    name: "Emma Larsen",
    company: "Id LLP",
    phone: "1-758-235-1569",
    email: "quam@icloud.com",
    country: "Vietnam",
    status: "Active",
  },
  {
    name: "Beck Steele",
    company: "Fusce Diam LLP",
    phone: "(756) 310-4354",
    email: "elementum@outlook.org",
    country: "United Kingdom",
    status: "Inactive",
  },
  {
    name: "Tasha Cleveland",
    company: "Egestas Company",
    phone: "1-673-368-0487",
    email: "ultrices@yahoo.couk",
    country: "Russian Federation",
    status: "Active",
  },
  {
    name: "Wyoming Simon",
    company: "Lorem Ltd",
    phone: "1-396-786-2546",
    email: "leo.morbi@aol.org",
    country: "Colombia",
    status: "Active",
  },
  {
    name: "Alana Price",
    company: "Sem Limited",
    phone: "(378) 987-6233",
    email: "ut@google.ca",
    country: "South Africa",
    status: "Active",
  },
  {
    name: "Carlos Snider",
    company: "Euismod LLP",
    phone: "(781) 306-3002",
    email: "ligula@icloud.couk",
    country: "China",
    status: "Active",
  },
  {
    name: "Jermaine Ramirez",
    company: "Consulting",
    phone: "(377) 837-7176",
    email: "magna.duis@hotmail.com",
    country: "Ukraine",
    status: "Active",
  },
  {
    name: "Beau Roman",
    company: "Ut LLP",
    phone: "1-642-517-4975",
    email: "semper.rutrum@aol.com",
    country: "New Zealand",
    status: "Active",
  },
  {
    name: "Maryam Reynolds",
    company: "Vitae Foundation",
    phone: "(374) 887-9161",
    email: "lectus.pede@pmail.edu",
    country: "Ireland",
    status: "Inactive",
  },
  {
    name: "Jamalia Mcmahon",
    company: "Foundation",
    phone: "(318) 774-5563",
    email: "gravida.aliquam@aol.net",
    country: "Australia",
    status: "Inactive",
  },
  {
    name: "Lane Petty",
    company: "Sem Industries",
    phone: "1-417-251-7275",
    email: "ipsum.porta@google.org",
    country: "Singapore",
    status: "Active",
  },
  {
    name: "Kane Hurst",
    company: "Aliquam Industries",
    phone: "(241) 757-9156",
    email: "dictum@yahoo.org",
    country: "China",
    status: "Active",
  },
  {
    name: "Jada Ellison",
    company: "Est Mauris PC",
    phone: "(597) 238-1752",
    email: "odio@aol.com",
    country: "Germany",
    status: "Active",
  },
  {
    name: "Meredith Pitts",
    company: "Ac Consulting",
    phone: "1-598-368-6141",
    email: "urna@outlook.couk",
    country: "Australia",
    status: "Active",
  },
];

const statusValues = { active: "Active", inactive: "Inactive" };

document.addEventListener("DOMContentLoaded", () => {
  const tBody = document.getElementById("customers-body-table");
  const paginationEl = document.getElementById("table-pagination");

  const searchInput = document.getElementById("search-input");
  searchInput.oninput = () => {
    let phrase = searchInput.value;
    document.querySelector(".main-not-results").innerHTML = "";
    if (phrase.length !== 0) {
      const regPhrase = new RegExp(phrase, "i");
      let flag = false;

      paginationEl.innerHTML = "";
      tBody.innerHTML = "";

      for (const customer of customers) {
        for (const property in customer) {
          flag = regPhrase.test(customer[property]);
          if (flag) break;
        }
        if (flag) {
          let tr = document.createElement("tr");
          for (const property in customer) {
            let td = document.createElement("td");
            if (customer[property] === statusValues.active) {
              const div = document.createElement("div");
              div.innerText = customer[property];
              div.classList.add("main-table__status--active");
              td.appendChild(div);
            } else if (customer[property] === statusValues.inactive) {
              const div = document.createElement("div");
              div.innerText = customer[property];
              div.classList.add("main-table__status--inactive");
              td.appendChild(div);
            } else {
              td.innerText = customer[property];
            }
            tr.appendChild(td);
          }
          tBody.appendChild(tr);
        }
      }
      if (tBody.rows.length === 0) {
        document.querySelector(".main-not-results").innerText = "Not Results";
      }
    } else {
      paginationEl.innerHTML = `<div class="main-pagination__text">
      Showing data <span class="main-pagination__number--start"></span> to
      <span class="main-pagination__number--end"></span> of
      <span class="main-pagination__number"></span> entries
    </div>`;
      document.querySelector(".main-not-results").innerHTML = "";
      paginationCallback();
    }
  };

  const paginationCallback = () => {
    let currentPage = 1;
    let rows = 8;

    const allNumberEl = document.querySelector(".main-pagination__number");
    allNumberEl.innerText = customers.length;

    const displayData = (arr, rowPerPage, page) => {
      page--;
      tBody.innerHTML = "";

      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = arr.slice(start, end);

      const startEl = document.querySelector(".main-pagination__number--start");
      startEl.innerText = start + 1;
      const endEl = document.querySelector(".main-pagination__number--end");
      endEl.innerText = end;

      paginatedData.forEach((el) => {
        let tr = document.createElement("tr");
        for (const property in el) {
          let td = document.createElement("td");
          if (el[property] === statusValues.active) {
            const div = document.createElement("div");
            div.innerText = el[property];
            div.classList.add("main-table__status--active");
            td.appendChild(div);
          } else if (el[property] === statusValues.inactive) {
            const div = document.createElement("div");
            div.innerText = el[property];
            div.classList.add("main-table__status--inactive");
            td.appendChild(div);
          } else {
            td.innerText = el[property];
          }
          tr.appendChild(td);
        }
        tBody.appendChild(tr);
      });
    };

    const displayPagination = (arr, rowPerPage) => {
      const pagesCount = Math.ceil(arr.length / rowPerPage);
      const ul = document.createElement("ul");
      ul.classList.add("main-pagination__list");

      const liPrev = displayPaginationPrevBtn();
      ul.appendChild(liPrev);
      for (let i = 0; i < pagesCount; i++) {
        const li = displayPaginationBtn(i + 1);
        ul.appendChild(li);
      }
      const liNext = displayPaginationNextBtn(pagesCount);
      ul.appendChild(liNext);
      paginationEl.appendChild(ul);
    };

    const displayPaginationPrevBtn = () => {
      const li = document.createElement("li");
      li.classList.add("main-pagination__item");
      li.innerText = "<";

      li.addEventListener("click", () => {
        const allListItems = document.querySelectorAll(
          ".main-pagination__list > li"
        );
        if (currentPage - 1 < 1) {
          return;
        }
        currentPage--;
        displayData(customers, rows, currentPage);

        let currentActiveLi = document.querySelector(
          ".main-pagination__item.active"
        );
        currentActiveLi.classList.remove("active");

        allListItems[currentPage].classList.add("active");
      });

      return li;
    };
    const displayPaginationNextBtn = (pagesCount) => {
      const li = document.createElement("li");
      li.classList.add("main-pagination__item");
      li.innerText = ">";

      li.addEventListener("click", () => {
        const allListItems = document.querySelectorAll(
          ".main-pagination__list > li"
        );
        if (currentPage + 1 > pagesCount) {
          return;
        }
        currentPage++;
        displayData(customers, rows, currentPage);

        let currentActiveLi = document.querySelector(
          ".main-pagination__item.active"
        );
        currentActiveLi.classList.remove("active");

        allListItems[currentPage].classList.add("active");
      });

      return li;
    };

    const displayPaginationBtn = (page) => {
      const li = document.createElement("li");
      li.classList.add("main-pagination__item");
      li.innerText = page;

      if (currentPage === page) {
        li.classList.add("active");
      }

      li.addEventListener("click", () => {
        currentPage = page;
        displayData(customers, rows, currentPage);

        let currentActiveLi = document.querySelector(
          ".main-pagination__item.active"
        );
        currentActiveLi.classList.remove("active");

        li.classList.add("active");
      });

      return li;
    };

    displayData(customers, rows, currentPage);
    displayPagination(customers, rows);
  };
  paginationCallback();
});
