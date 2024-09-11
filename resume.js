// script.ts
document.addEventListener('DOMContentLoaded', function () {
    // Profile Picture Upload and Preview
    var profilePicInput = document.getElementById('profilePic');
    var profilePicPreview = document.getElementById('profilePicPreview');
    profilePicInput.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePicPreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                profilePicPreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
    // Accordion for Skills Section
    var acc = document.getElementsByClassName('accordion');
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            }
            else {
                panel.style.display = 'block';
            }
        });
    }
    // Download Resume as PDF
    var downloadBtn = document.getElementById('downloadResume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            // Implement PDF download functionality
            alert('Download feature is not yet implemented.');
        });
    }
    // Print Resume
    var printBtn = document.getElementById('printResume');
    if (printBtn) {
        printBtn.addEventListener('click', function () {
            window.print();
        });
    }
});
