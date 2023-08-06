function removeBackground() {
    const imageInput = document.getElementById("imageInput");
    const outputContainer = document.getElementById("outputContainer");
  
    if (!imageInput.files.length) {
      alert("Please select an image.");
      return;
    }
  
    const imageFile = imageInput.files[0];
    const formData = new FormData();
    formData.append("image_file", imageFile);
  
    // Replace "YOUR_API_KEY" with your actual API key from Remove.bg
    const apiKey = "zZFccwvD5QgKHrLPcu7ncsUf";
    const apiUrl = `https://api.remove.bg/v1.0/removebg`;
  
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    })
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const outputImage = document.createElement("img");
        outputImage.src = imageUrl;
        outputContainer.innerHTML = "";
        outputContainer.appendChild(outputImage);
      })
      .catch((error) => {
        console.error("Error removing background:", error);
        alert("Failed to remove background. Please try again later.");
      });
  }
  