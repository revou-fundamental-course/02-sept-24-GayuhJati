function showSection(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');

    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    event.target.classList.add('active');
}

function hitungLuasSegitiga() {

    var base = parseFloat(document.getElementById('base-luas').value);
    var height = parseFloat(document.getElementById('height-luas').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'Harap masukkan nilai yang valid untuk alas dan tinggi.';
        return;
    }

    var area = 0.5 * base * height;

    document.getElementById('result-luas').innerText = 'Luas segitiga adalah: ' + area;
}


function hitungKelilingSegitiga(){
    var s1 = parseFloat(document.getElementById('s1').value);
    var s2 = parseFloat(document.getElementById('s2').value);
    var s3 = parseFloat(document.getElementById('s3').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3<=0 ) {
        document.getElementById('result').innerText = 'Harap masukkan nilai yang valid untuk alas dan tinggi.';
        return;
    }

    var keliling = s1+s2+s3;

    document.getElementById('result-keliling').innerText = 'Keliling segitiga adalah: ' + keliling ;

}