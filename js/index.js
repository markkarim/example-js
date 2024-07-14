/// <reference types="../@types/jquery" />

/////home
async function home(meal) {
  let allRespones = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  let data = await allRespones.json();

  let food = data.meals;

  let box = ``;
  for (let i = 0; i < food.length; i++) {
    box += `<div class="col-lg-3 col-md-6 col-12  icon" >
                <div class="icon position-relative " >
                  <img
                    src="${food[i].strMealThumb}"
                    class="img-fluid border-2 rounded-3 "
                    alt="food" />
                  <div
                    class="con d-flex align-items-center border-2 rounded-3 p-2">
                    <h2 class="text-black">${food[i].strMeal}</h2>
                  </div>
                </div>
              </div>`;
  }

  document.getElementById("rowData").innerHTML = box;
}
home("");

///homeCategories
async function homeCategories(meal) {
  let allRespones = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
  );
  let data = await allRespones.json();

  let food = data.meals;

  let box = ``;
  for (let i = 0; i < food.length; i++) {
    box += `
  <div class="col-md-4 col-12">
                      <img
                        src="./photo/g373701551450225.jpg"
                        class="img-fluid"
                        alt="" />
                      <h3 class="text-white pt-3 fs-1">Beef</h3>
                    </div>

                    <div class="col-md-8 col-12">
                      <h2 class="text-white">Instructions</h2>
                      <p class="text-white">
                        STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice. Lay a
                        nori sheet on the mat, shiny-side down. Dip your hands
                        in the vinegared water, then pat handfuls of rice on top
                        in a 1cm thick layer, leaving the furthest edge from you
                        clear. STEP 2 Spread over some Japanese mayonnaise. Use
                        a spoon to spread out a thin layer of mayonnaise down
                        the middle of the rice. STEP 3 Add the filling. Get your
                        child to top the mayonnaise with a line of their
                        favourite fillings – here we’ve used tuna and cucumber.
                        STEP 4 Roll it up. Lift the edge of the mat over the
                        rice, applying a little pressure to keep everything in a
                        tight roll. STEP 5 Stick down the sides like a stamp.
                        When you get to the edge without any rice, brush with a
                        little water and continue to roll into a tight roll.
                        STEP 6 Wrap in cling film. Remove the mat and roll
                        tightly in cling film before a grown-up cuts the sushi
                        into thick slices, then unravel the cling film. STEP 7
                        TO MAKE PRESSED SUSHI: Layer over some smoked salmon.
                        Line a loaf tin with cling film, then place a thin layer
                        of smoked salmon inside on top of the cling film. STEP 8
                        Cover with rice and press down. Press about 3cm of rice
                        over the fish, fold the cling film over and press down
                        as much as you can, using another tin if you have one.
                        STEP 9 Tip it out like a sandcastle. Turn block of sushi
                        onto a chopping board. Get a grown-up to cut into
                        fingers, then remove the cling film. STEP 10 TO MAKE
                        SUSHI BALLS: Choose your topping. Get a small square of
                        cling film and place a topping, like half a prawn or a
                        small piece of smoked salmon, on it. Use damp hands to
                        roll walnut-sized balls of rice and place on the
                        topping. STEP 11 Make into tight balls. Bring the
                        corners of the cling film together and tighten into
                        balls by twisting it up, then unwrap and serve.
                      </p>

                      <p class="text-white h3">Area : <span>Japanese</span></p>
                      <p class="text-white h3">
                        Category : <span>Seafood</span>
                      </p>
                      <p class="text-white h3">Recipes :</p>

                      <ul class="list-unstyled d-flex g-3 flex-wrap">
                        <li class="alert alert-info m-2 p-1">
                          300ml Sushi Rice
                        </li>
                        <li class="alert alert-info m-2 p-1">
                          100ml Rice wine
                        </li>
                        <li class="alert alert-info m-2 p-1">
                          2 tbs Caster Sugar
                        </li>
                        <li class="alert alert-info m-2 p-1">
                          3 tbs Mayonnaise
                        </li>
                        <li class="alert alert-info m-2 p-1">
                          1 tbs Rice wine
                        </li>
                        <li class="alert alert-info m-2 p-1">
                          1 tbs Soy Sauce
                        </li>
                        <li class="alert alert-info m-2 p-1">1 Cucumber</li>
                      </ul>

                      <p class="text-white h3">Tags :</p>

                      <div class="flex pt-3">
                        <button class="btn btn-outline-success "><a href="">Source</a></button>
                        <button class="btn btn-outline-danger"><a href="">Youtube</a></button>
                      </div>
                    </div>
  `;
  }

  document.getElementById("rowHome").innerHTML = box;
}
homeCategories("52772");

$(".icon").on("click", function () {
  let idCat = $(this);
  console.log(idCat);
  console.log("helooo");
});

////loading
$(function () {
  $(".loader").fadeOut(1500, function () {
    $(".loading").fadeOut(900, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

/////sidebar
$(".bar-side .open").on("click", function () {
  $(".menu-side").animate({ width: "100%" }, 1000).toggleClass("d-flex");
  $(".fa-bars").toggleClass("d-none");
  $(".fa-xmark").toggleClass("d-none");
  $(".menu-side h3").slideToggle("1500");
});

////search
$(".menu-side h3 a").on("click", function () {
  const sectionToShow = $(this).attr("href");
  $("section").addClass("d-none");
  $(sectionToShow).removeClass("d-none");
  $(".fa-bars").toggleClass("d-none");
  $(".fa-xmark").toggleClass("d-none");
  $(".menu-side").animate({ width: "0" }, 1000).toggleClass("d-flex");
    $(".menu-side h3").slideToggle("1500");

  

  


});

async function searchName(meal) {
  let sName = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  let data = await sName.json();
  let food = data.meals;

  let box = ``;
  for (let i = 0; i < food.length; i++) {
    box += `<div class="col-lg-3 col-md-6 col-12">
                <div class="icon position-relative">
                  <img
                    src="${food[i].strMealThumb}"
                    class="img-fluid border-2 rounded-3"
                    alt="food" />
                  <div
                    class="con d-flex align-items-center border-2 rounded-3 p-2">
                    <h2 class="text-black">${food[i].strMeal}</h2>
                  </div>
                </div>
              </div>`;
  }

  document.getElementById("rowData1").innerHTML = box;
}

$("#searchByName").on("input", function (e) {
  searchName(e.target.value);
});

async function searchLetter(x) {
  let sLetter = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`
  );
  let data = await sLetter.json();
  let food = data.meals;
  console.log(food);

  let box = ``;
  for (let i = 0; i < food.length; i++) {
    box += `<div class="col-lg-3 col-md-6 col-12">
                <div class="icon position-relative">
                  <img
                    src="${food[i].strMealThumb}"
                    class="img-fluid border-2 rounded-3"
                    alt="food" />
                  <div
                    class="con d-flex align-items-center border-2 rounded-3 p-2">
                    <h2 class="text-black">${food[i].strMeal}</h2>
                  </div>
                </div>
              </div>`;
  }

  document.getElementById("rowData1").innerHTML = box;
}

$("#searchByFirstLetter").on("input", function (e) {
  searchLetter(e.target.value);
});





////categories
async function categorieData() {
  let cData = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await cData.json();
  let food = data.categories;

  console.log(food);


  let box = ``;
  for (let i = 0; i < food.length; i++) {
    box += `<div class="col-lg-3 col-md-6 col-12">
                <div class="icon position-relative">
                  <img
                    src="${food[i].strCategoryThumb}"
                    class="img-fluid border-2 rounded-3"
                    alt="food"/>
                  <div
                    class="con d-flex align-items-center justify-content-center border-2 rounded-3 p-2">
                    <div class="text-center p-2">
                      <h2 class="text-black">${food[i].strCategory}</h2>
                      <p class="text-black fs-6">${food[i].strCategoryDescription
                        .split("")
                        .slice(0, 100)
                        .join("")}</p>
                    </div>
                  </div>
                </div>
              </div>
    `
  };
  document.getElementById('rowData3').innerHTML = box;
};

categorieData();


