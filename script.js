function getUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
      document.querySelector(".users").innerHTML = "";
      data.results.forEach((user) => {
        // Parent div
        const card = document.createElement("div");
        card.className =
          "flex items-center gap-4 bg-neutral-800/60 border border-neutral-700 rounded-xl px-6 py-4 backdrop-blur-sm shadow-md";

        // Image
        const img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = "User Avatar";
        img.className = "w-14 h-14 rounded-full object-cover";

        // Info container
        const info = document.createElement("div");

        // Name
        const name = document.createElement("h2");
        name.className = "text-white font-medium text-lg";
        name.textContent = user.name.first + " " + user.name.last;

        // Email
        const email = document.createElement("p");
        email.className = "text-gray-400 text-sm";
        email.textContent = user.email;

        // Status
        const status = document.createElement("span");
        status.className = "text-green-500 text-sm";
        status.textContent = "Active";

        // Append all child elements
        info.appendChild(name);
        info.appendChild(email);
        info.appendChild(status);

        card.appendChild(img);
        card.appendChild(info);

        // Add to document (for example, inside body)
        document.querySelector(".users").appendChild(card);
      });
    });
}
getUsers();
document.querySelector("#refreshBtn").addEventListener("click", () => {
  getUsers();
});
