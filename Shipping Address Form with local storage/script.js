$(document).ready(function () {
  let getId = "";
  let savedAddresses = JSON.parse(localStorage.getItem("savedAddresses")) || [];
  let dropdown = $("#savedAddresses");
  dropdown.empty();
  dropdown.append('<option selected disabled>Select a saved address</option>');

  savedAddresses.forEach(function (address) {
    dropdown.append('<option>' + address.name + " " + address.city + " " + address.zip + '</option>');
  });

  $("#add_new_address").click(function (event) {
    event.preventDefault();
    $("#formData")[0].reset();
    $("#formData").show();
    $("#save_message").hide();
  });

  $("#formData").validate({
    rules: {
      inputName: {
        required: true
      },
      inputEmail: {
        required: true,
        email: true
      },
      inputAddress: {
        required: true
      },
      inputCity: {
        required: true
      },
      inputState: {
        required: true
      },
      inputZip: {
        required: true
      }
    },
    messages: {
      inputName: {
        required: "Please enter a name."
      },
      inputEmail: {
        required: "Please enter an email address.",
        email: "Please enter a valid email address."
      },
      inputAddress: {
        required: "Please enter an address."
      },
      inputCity: {
        required: "Please enter a city."
      },
      inputState: {
        required: "Please enter a state."
      },
      inputZip: {
        required: "Please enter a zip code."
      }
    },
    errorPlacement: function (error, element) {
      error.addClass("err");
      error.attr("id", "err-" + element.attr("id"));
      error.insertAfter(element);
    }
  });

  $("#formData").submit(function (event) {
    event.preventDefault();

    if ($(this).valid()) {
      let id = "";
      let name = $("#inputName").val();
      let email = $("#inputEmail").val();
      let address = $("#inputAddress").val();
      let city = $("#inputCity").val();
      let state = $("#inputState").val();
      let zip = $("#inputZip").val();

      if (getId) {
        id = getId;
      } else {
        id = Math.random();
      }

      let formData = {
        name: name,
        email: email,
        address: address,
        city: city,
        state: state,
        zip: zip,
        id: id
      };

      // Check for duplicate data
      let isDuplicate = savedAddresses.some(function (item) {
        return (
          item.name.toLowerCase() === name.toLowerCase() &&
          item.city.toLowerCase() === city.toLowerCase() &&
          item.zip === zip
        );
      });

      if (!isDuplicate) {
        if (getId) {
          let indexToUpdate = savedAddresses.findIndex(function (item) {
            return item.id === getId;
          });

          if (indexToUpdate !== -1) {
            savedAddresses[indexToUpdate] = formData;
          }
          getId = ""; // Reset getId after updating
        } else {
          savedAddresses.push(formData);
        }

        localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));
        $("#formData")[0].reset();
        $("#save_message").text("Address has been saved").show();

        // Update dropdown options
        dropdown.empty();
        dropdown.append('<option selected disabled>Select a saved address</option>');
        savedAddresses.forEach(function (address) {
          dropdown.append('<option>' + address.name + " " + address.city + " " + address.zip + '</option>');
        });

        setTimeout(function () {
          location.reload();
        }, 3000);
      } else {
        // Display error message for duplicate data
        alert("Duplicate data! This address already exists.");
      }
    } else {
      // Display error messages
      $(".err").show();
    }
  });

  $("#update_address").click(function () {
    let selectedAddress = dropdown.val();
    if (selectedAddress) {
      let address = savedAddresses.find(function (item) {
        return item.name + " " + item.city + " " + item.zip === selectedAddress;
      });

      if (address) {
        getId = address.id;
        $("#inputName").val(address.name);
        $("#inputEmail").val(address.email);
        $("#inputAddress").val(address.address);
        $("#inputCity").val(address.city);
        $("#inputState").val(address.state);
        $("#inputZip").val(address.zip);
        $("#formData").show();
        $("#save_message").hide();
      }
    }
  });

  $("#delete_address").click(function () {
    let selectedAddress = dropdown.val();
    if (selectedAddress) {
      savedAddresses = savedAddresses.filter(function (item) {
        return item.name + " " + item.city + " " + item.zip !== selectedAddress;
      });
      localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));

      // Update dropdown options after deletion
      dropdown.empty();
      dropdown.append('<option selected disabled>Select a saved address</option>');
      savedAddresses.forEach(function (address) {
        dropdown.append('<option>' + address.name + " " + address.city + " " + address.zip + '</option>');
      });

      location.reload();
    }
  });
});
