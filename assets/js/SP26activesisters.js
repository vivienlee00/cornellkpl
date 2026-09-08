// ---------- SP26  Active Sisters (with image extension fallback) ----------
data = [
  // alpha nu class 
  {
    big: "Christine *enoki* Cho",
    ethnicity: "Korean",
    first_name: "Abigail",
    hometown: "Los Angeles, CA",
    last_name: "Park",
    line_number: 231,
    little: "n/a",
    major: "Information Science",
    nickname: "makōra",
    semester: "Spring 2024",
    year: 2027,
  },
  {
    big: "Chelsea *kyem* Lin",
    ethnicity: "Chinese",
    first_name: "Jolin",
    hometown: "Effingham, IL",
    last_name: "Jiang",
    line_number: 233,
    little: "Joann *vasilisa* Lee",
    major: "Hotel Administration",
    nickname: "ambrette",
    semester: "Spring 2024",
    year: 2027,
  },
  {
    big: "Christine *enoki* Cho",
    ethnicity: "Korean",
    first_name: "Esther",
    hometown: "Bellevue, WA",
    last_name: "Yoon",
    line_number: 235,
    little: "n/a",
    major: "Psychology",
    nickname: "sémielle",
    semester: "Spring 2024",
    year: 2027,
  },
  {
    big: "Lyss *HESPEROS* Paek",
    ethnicity: "Korean",
    first_name: "Jiyin",
    hometown: "Johns Creek, GA",
    last_name: "You",
    line_number: 236,
    little: "Jenny *lokani* Kim",
    major: "Human Biology, Health, and Society",
    nickname: "aythya",
    semester: "Spring 2024",
    year: 2027,
  },

  // alpha omi class 
  {
    big: "Jessica *rhôa* Han",
    ethnicity: "Korean",
    first_name: "Gia",
    hometown: "Cresskill, NJ",
    last_name: "Kim",
    line_number: 240,
    little: "n/a",
    major: "Chemistry",
    nickname: "kesna",
    semester: "Spring 2025",
    year: 2028,
  },
  {
    big: "Kelly *Sutera* Feng",
    ethnicity: "Chinese",
    first_name: "Gwendolyn",
    hometown: "Brooklyn, NY",
    last_name: "Sze",
    line_number: 241,
    little: "n/a",
    major: "Applied Economics & Management",
    nickname: "Asami",
    semester: "Spring 2025",
    year: 2028,
  },
  {
    big: "Julia *star sapphire* Masuda",
    ethnicity: "Chinese",
    first_name: "Kyra",
    hometown: "Honolulu, HI",
    last_name: "Lung",
    line_number: 243,
    little: "n/a",
    major: "Applied Economics and Management",
    nickname: "selphira",
    semester: "Spring 2025",
    year: 2027,
  },
  {
    big: "Kelly *Sutera* Feng",
    ethnicity: "Chinese",
    first_name: "Emily",
    hometown: "NYC, NY",
    last_name: "Bu",
    line_number: 244,
    little: "n/a",
    major: "Nutritional Sciences",
    nickname: "Kenkō",
    semester: "Spring 2025",
    year: 2027,
  },
  {
    big: "Amber *roborare* Prasad",
    ethnicity: "Chinese",
    first_name: "Selina",
    hometown: "Johns Creek, GA",
    last_name: "Xu",
    line_number: 245,
    little: "n/a",
    major: "Psychology",
    nickname: "verusare",
    semester: "Spring 2025",
    year: 2027,
  },
  {
    big: "Venus *remaic* Zheng",
    ethnicity: "Chinese",
    first_name: "Jessica",
    hometown: "Queens, NY",
    last_name: "Wang",
    line_number: 248,
    little: "n/a",
    major: "Economics and Information Science",
    nickname: "fléurelic",
    semester: "Spring 2025",
    year: 2028,
  },

  // alpha pi class 
  {
    big: "Hallie *tequi* Lai",
    ethnicity: "Korean",
    first_name: "Eunice",
    hometown: "Queens, NY",
    last_name: "Rim",
    line_number: 249,
    little: "n/a",
    major: "Animal Science",
    nickname: "kaze",
    semester: "Fall 2025",
    year: 2028,
  },
  {
    big: "Joyce *Ilianthos* Chen",
    ethnicity: "Chinese",
    first_name: "Angelina",
    hometown: "Long Island, NY",
    last_name: "Kwong",
    line_number: 250,
    little: "n/a",
    major: "Hotel Administration",
    nickname: "Iresine",
    semester: "Fall 2025",
    year: 2028,
  },
  {
    big: "Neen *resalire* Tangcharoenmonkong ",
    ethnicity: "Taiwanese / Chinese ",
    first_name: "Melody",
    hometown: "Andover, Massachusetts",
    last_name: "Tang",
    line_number: 251,
    little: "n/a",
    major: "Physics",
    nickname: "reka",
    semester: "Fall 2025",
    year: 2028,
  },
  {
    big: "Joy *kintarō* Om",
    ethnicity: "Chinese",
    first_name: "Tiffany",
    hometown: "Bayside, NY",
    last_name: "Li",
    line_number: 252,
    little: "n/a",
    major: "Electrical and Computer Engineering",
    nickname: "Kaijin",
    semester: "Fall 2025",
    year: 2028,
  },
  {
    big: "Dathy Orphéon Pham",
    ethnicity: "Chinese",
    first_name: "Queenie",
    hometown: "Long Island, NY",
    last_name: "Chen",
    line_number: 253,
    little: "n/a",
    major: "Biological Sciences",
    nickname: "Eladaria",
    semester: "Fall 2025",
    year: 2028,
  },
  {
    big: "Rose *eloise* Liu",
    ethnicity: "Taiwanese / Chinese",
    first_name: "Colleen",
    hometown: "Bay Area, CA",
    last_name: "Yu",
    line_number: 255,
    little: "n/a",
    major: "ILR",
    nickname: "Lilisé",
    semester: "Fall 2025",
    year: 2028,
  }
];

// --- small safe fix so `name` checks don't throw ReferenceError in some blocks ---
var name = "";

// --- image extension fallback helper ---
const IMG_EXTS = ["jpeg", "JPEG", "jpg", "JPG", "png", "webp", "PNG"];
function imgFallback(el, line, folder) {
  const i = parseInt(el.dataset.nextExtIndex || "0", 10);
  const next = i + 1;
  if (next < IMG_EXTS.length) {
    el.dataset.nextExtIndex = String(next);
    el.src = `images/activeroster/${folder}/${line}.${IMG_EXTS[next]}`;
  } else {
    // optional placeholder if none found
    el.src = "images/activeroster/placeholder.jpg";
  }
}

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "white";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = "#420000";
}

function displayClass(clss) {
  // Use your new folder for all currently displayed photos
  var folder = "SP25";

  if (clss == "ALambda") {
    var sem = "Spring 2023";
    for (i = 0; i < data.length; i++) {
      if (data[i].semester == sem && data[i].first_name !== "Dylan") {
        var sister = `<div class="col-3 col-12-medium">
            <div class="container">
              <img class="image"
                   src="images/activeroster/${folder}/${data[i].line_number}.jpeg"
                   onerror="imgFallback(this, ${data[i].line_number}, '${folder}')"
                   alt="#${data[i].line_number} ${data[i].first_name} ${data[i].last_name}" />
              <div class="overlay">
                <div class="text">
                  <h5>#${data[i].line_number}<br>${data[i].first_name} *${data[i].nickname}* ${data[i].last_name}</h5>
                  <p class="sisterDesc">
                    <b><u>Major:</u></b> ${data[i].major} / ${data[i].year}<br>
                    <b><u>Ethnicity:</u></b> ${data[i].ethnicity}<br>
                    <b><u>Hometown:</u></b> ${data[i].hometown}<br>
                    <b><u>Big:</u></b> ${data[i].big}<br>
                    <b><u>Little(s):</u></b> ${data[i].little}<br><br>
  
                  </p>
                </div>
              </div>
            </div>
          </div>`;
        $("#" + clss + " .row").append(sister);
      }
    }
  }

  if (clss == "AAlpha") {
    var name = "Dylan";
    for (i = 0; i < data.length; i++) {
      if (data[i].first_name == name) {
        var sister = `<div class="col-3 col-12-medium">
            <div class="container">
              <img class="image"
                   src="images/activeroster/SP25/dylan.JPG"
                   onerror="imgFallback(this, ${data[i].line_number}, '${folder}')"
                   alt="#${data[i].line_number} ${data[i].first_name} ${data[i].last_name}" />
              <div class="overlay">
                <div class="text">
                  <h5>#${data[i].line_number}<br>${data[i].first_name} *${data[i].nickname}* ${data[i].last_name}</h5>
                  <p class="sisterDesc">
                    <b><u>Major:</u></b> ${data[i].major} / ${data[i].year}<br>
                    <b><u>Ethnicity:</u></b> ${data[i].ethnicity}<br>
                    <b><u>Hometown:</u></b> ${data[i].hometown}<br>
                    <b><u>Big:</u></b> ${data[i].big}<br>
                    <b><u>Little(s):</u></b> ${data[i].little}<br><br>
                
                  </p>
                </div>
              </div>
            </div>
          </div>`;
        $("#" + clss + " .row").append(sister);
      }
    }
  }

  if (clss == "AMu") {
    var sem = "Fall 2023";
    for (i = 0; i < data.length; i++) {
      if (data[i].semester == sem && data[i].first_name !== name) {
        var sister = `<div class="col-3 col-12-medium">
            <div class="container">
              <img class="image"
                   src="images/activeroster/${folder}/${data[i].line_number}.jpeg"
                   onerror="imgFallback(this, ${data[i].line_number}, '${folder}')"
                   alt="#${data[i].line_number} ${data[i].first_name} ${data[i].last_name}" />
              <div class="overlay">
                <div class="text">
                  <h5>#${data[i].line_number}<br>${data[i].first_name} *${data[i].nickname}* ${data[i].last_name}</h5>
                  <p class="sisterDesc">
                    <b><u>Major:</u></b> ${data[i].major} / ${data[i].year}<br>
                    <b><u>Ethnicity:</u></b> ${data[i].ethnicity}<br>
                    <b><u>Hometown:</u></b> ${data[i].hometown}<br>
                    <b><u>Big:</u></b> ${data[i].big}<br>
                    <b><u>Little(s):</u></b> ${data[i].little}<br><br>
                
                  </p>
                </div>
              </div>
            </div>
          </div>`;
        $("#" + clss + " .row").append(sister);
      }
    }
  }

  if (clss == "ANu") {
    var sem = "Spring 2024";
    for (i = 0; i < data.length; i++) {
      if (data[i].semester == sem && data[i].first_name !== name) {
        var sister = `<div class="col-3 col-12-medium">
            <div class="container">
              <img class="image"
                   src="images/activeroster/${folder}/${data[i].line_number}.jpeg"
                   onerror="imgFallback(this, ${data[i].line_number}, '${folder}')"
                   alt="#${data[i].line_number} ${data[i].first_name} ${data[i].last_name}" />
              <div class="overlay">
                <div class="text">
                  <h5>#${data[i].line_number}<br>${data[i].first_name} *${data[i].nickname}* ${data[i].last_name}</h5>
                  <p class="sisterDesc">
                    <b><u>Major:</u></b> ${data[i].major} / ${data[i].year}<br>
                    <b><u>Ethnicity:</u></b> ${data[i].ethnicity}<br>
                    <b><u>Hometown:</u></b> ${data[i].hometown}<br>
                    <b><u>Big:</u></b> ${data[i].big}<br>
                    <b><u>Little(s):</u></b> ${data[i].little}<br><br>
                  
                  </p>
                </div>
              </div>
            </div>
          </div>`;
        $("#" + clss + " .row").append(sister);
      }
    }
  }

  if (clss == "AOmicron") {
    var sem = "Spring 2025";
    for (i = 0; i < data.length; i++) {
      if (data[i].semester == sem && data[i].first_name !== name) {
        var sister = `<div class="col-3 col-12-medium">
            <div class="container">
              <img class="image"
                   src="images/activeroster/${folder}/${data[i].line_number}.jpeg"
                   onerror="imgFallback(this, ${data[i].line_number}, '${folder}')"
                   alt="#${data[i].line_number} ${data[i].first_name} ${data[i].last_name}" />
              <div class="overlay">
                <div class="text">
                  <h5>#${data[i].line_number}<br>${data[i].first_name} *${data[i].nickname}* ${data[i].last_name}</h5>
                  <p class="sisterDesc">
                    <b><u>Major:</u></b> ${data[i].major} / ${data[i].year}<br>
                    <b><u>Ethnicity:</u></b> ${data[i].ethnicity}<br>
                    <b><u>Hometown:</u></b> ${data[i].hometown}<br>
                    <b><u>Big:</u></b> ${data[i].big}<br>
                    <b><u>Little(s):</u></b> ${data[i].little}<br><br>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>`;
        $("#" + clss + " .row").append(sister);
      }
    }
  }
  if (clss == "APi") {
    var sem = "Fall 2025";
    for (i = 0; i < data.length; i++) {
      if (data[i].semester == sem && data[i].first_name !== name) {
        var sister = `<div class="col-3 col-12-medium">
            <div class="container">
              <img class="image"
                   src="images/activeroster/${folder}/${data[i].line_number}.jpeg"
                   onerror="imgFallback(this, ${data[i].line_number}, '${folder}')"
                   alt="#${data[i].line_number} ${data[i].first_name} ${data[i].last_name}" />
              <div class="overlay">
                <div class="text">
                  <h5>#${data[i].line_number}<br>${data[i].first_name} *${data[i].nickname}* ${data[i].last_name}</h5>
                  <p class="sisterDesc">
                    <b><u>Major:</u></b> ${data[i].major} / ${data[i].year}<br>
                    <b><u>Ethnicity:</u></b> ${data[i].ethnicity}<br>
                    <b><u>Hometown:</u></b> ${data[i].hometown}<br>
                    <b><u>Big:</u></b> ${data[i].big}<br>
                    <b><u>Little(s):</u></b> ${data[i].little}<br><br>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>`;
        $("#" + clss + " .row").append(sister);
      }
    }
  }
}

$(document).ready(function () {
  document.getElementById("defaultOpen").click();
  displayClass("AEta");
  displayClass("ATheta");
  displayClass("AIota");
  displayClass("AKappa");
  displayClass("ALambda");
  displayClass("AAlpha");
  displayClass("AMu");
  displayClass("ANu");
  displayClass("AOmicron");
  displayClass("APi")
});
