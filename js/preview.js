// Get the modal
function preview(id) {
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var img = document.getElementById(id);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        if (id == "myImgg") {
            path = "images/project1/";
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

        }
        if (id == "myImg1") {
            path = "images/project2/";
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

        }
        if (id == "myImg2") {
            path = "images/project3/";
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        if (id =="mycertificate")
        {
            path ="images/certificate/";
            modal.style.display = "block";
            modalImg.src = "images/certificate/4.JPG";
            captionText.innerHTML = "my java certification from abc institute, banglore.";
        }
        if (id == "pycertificate") {
            path = "images/project-certificate/";
            modal.style.display = "block";
            modalImg.src = "images/project-certificate/4.JPG";
            captionText.innerHTML = "my academic project certification from TryLogic, Hyderabad.";

        }
        if(id=="myImgpy")
        {
            path="images/python/";
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;


        }

    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        imgsrc = 4;
    }

}