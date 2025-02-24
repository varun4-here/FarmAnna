document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  // File upload handling
  const fileInput = document.getElementById('leaf-image-upload');
  const previewContainer = document.getElementById('upload-preview');
  const previewImage = document.getElementById('preview-image');
  const fileName = document.getElementById('file-name');
  const analyzeButton = document.getElementById('analyze-button');
  
  fileInput.addEventListener('change', function() {
    const file = this.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.addEventListener('load', function() {
        previewImage.setAttribute('src', this.result);
        fileName.textContent = file.name;
        previewContainer.style.display = 'block';
      });
      
      reader.readAsDataURL(file);
    } else {
      previewContainer.style.display = 'none';
      previewImage.setAttribute('src', '');
      fileName.textContent = 'No file selected';
    }
  });
  
  analyzeButton.addEventListener('click', function() {
    if (fileInput.files.length > 0) {
      // In a real implementation, this would send the file to the server for analysis
      alert('Analyzing leaf image: ' + fileInput.files[0].name);
    } else {
      alert('Please select an image first');
    }
  });