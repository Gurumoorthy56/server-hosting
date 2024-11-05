function loadBootstrap3Carousel() {
    const carouselContainer = document.createElement('div');

    carouselContainer.innerHTML = `<div class="d-flex align-items-center justify-content-center">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> -->
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossorigin="anonymous">
                <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
                <div class=" thiis">

                    <div id="myCarousel" class="carousel slide" data-ride="corousel" data-interval="false">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>

                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <div class=" item active">
                                <div style="width: 100%; background-color:transparent;height: 61%;"
                                    class="row text-center">
                                    <div class="col-7 mx-auto">
                                        <div class="mb-5"><img src="./assets/person_2.jpg.webp" alt=""
                                                style="height: 30%; width: 18%;border-radius: 50%;"></div>
                                        <p class="fs-1 mt-4"
                                            style=" line-height: 1.1; font-weight: 350;margin-bottom: 0;">
                                            Jennifer
                                            Greive</p>
                                        <p class="fs-2 mb-5" style="color: #b9bbba;">LEAD DESIGNER, MIG COMPANY</p>
                                        <div class="" style="font-size: 22px; font-weight: 450;line-height: 1.8;">Lorem
                                            ipsum
                                            dolor
                                            sit amet
                                            consectetur adipisicing
                                            elit. Vitae aut minima
                                            nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div style="width: 100%; background-color:transparent;height: 61%;"
                                    class="row text-center">
                                    <div class="col-7 mx-auto">
                                        <div class="mb-5"><img src="./assets/person_1.jpg.webp" alt=""
                                                style="height: 30%; width: 18%;border-radius: 50%;"></div>
                                        <p class="fs-1 mt-4"
                                            style=" line-height: 1.1; font-weight: 350;margin-bottom: 0;">
                                            Elizabeth
                                            Graham</p>
                                        <p class="fs-2 mb-5" style="color: #b9bbba;">Creative Director, XYG Company</p>
                                        <div class="" style="font-size: 22px; font-weight: 450;line-height: 1.8;">Lorem
                                            ipsum
                                            dolor
                                            sit amet
                                            consectetur adipisicing
                                            elit. Vitae aut minima
                                            nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div style="width: 100%; background-color:transparent;height: 61%;"
                                    class="row text-center">
                                    <div class="col-7 mx-auto">
                                        <div class="mb-5"><img src="./assets/person_2.jpg.webp" alt=""
                                                style="height: 30%; width: 18%;border-radius: 50%;"></div>
                                        <p class="fs-1 mt-4"
                                            style=" line-height: 1.1; font-weight: 350;margin-bottom: 0;">
                                            Jennifer
                                            Greive</p>
                                        <p class="fs-2 mb-5" style="color: #b9bbba;">LEAD DESIGNER, MIG COMPANY</p>
                                        <div class="" style="font-size: 22px; font-weight: 450;line-height: 1.8;">Lorem
                                            ipsum
                                            dolor
                                            sit amet
                                            consectetur adipisicing
                                            elit. Vitae aut minima
                                            nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div style="width: 100%; background-color:transparent;height: 61%;"
                                    class="row text-center">
                                    <div class="col-7 mx-auto">
                                        <div class="mb-5"><img src="./assets/person_1.jpg.webp" alt=""
                                                style="height: 30%; width: 18%;border-radius: 50%;"></div>
                                        <p class="fs-1 mt-4"
                                            style=" line-height: 1.1; font-weight: 350;margin-bottom: 0;">
                                            Elizabeth
                                            Graham</p>
                                        <p class="fs-2 mb-5" style="color: #b9bbba;">Creative Director, XYG Company</p>
                                        <div class="" style="font-size: 22px; font-weight: 450;line-height: 1.8;">Lorem
                                            ipsum
                                            dolor
                                            sit amet
                                            consectetur adipisicing
                                            elit. Vitae aut minima
                                            nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-5"><br><br><br><br></div>

                        <!-- Left and right controls -->
                        <a class="left carousel-control" style="top: 92%; background: none;" href="#myCarousel"
                            data-slide="prev" id="prevBtn">
                            <i class="material-icons"
                                style="font-size:40px; color: #a7a7a7;text-shadow:0 0 #b9bbba;margin-left:-200;">arrow_back</i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" style="top: 92%; background: none;" href="#myCarousel"
                            data-slide="next" id="nextBtn">
                            <i class="material-icons"
                                style="font-size:40px; color: #a7a7a7;text-shadow:0 0 #b9bbba;margin-right: -200;">arrow_forward</i>
                            <span class="sr-only">Next</span>
                        </a>

                    </div>
                </div>
                <script>
                    $(document).ready(function () {
                        // Function to set the transition speed for manual control
                        $('.carousel-control').click(function () {
                            $('#myCarousel .carousel-inner').css('transition', 'transform 0.1s ease'); // Set transition speed
                        });

                        // Function to check the active slide and show/hide controls
                        function updateControls() {
                            var $active = $('#myCarousel .item.active');
                            var totalItems = $('#myCarousel .item').length;
                            var activeIndex = $active.index();

                            // Hide previous button if on the first slide
                            $('#prevBtn').toggle(activeIndex !== 0);
                            // Hide next button if on the last slide
                            $('#nextBtn').toggle(activeIndex !== totalItems - 1);
                        }

                        // Initial control update
                        updateControls();

                        // Update controls on slide change
                        $('#myCarousel').on('slid.bs.carousel', function () {
                            updateControls();
                        });
                    });
                </script>
            </div>`;
    document.getElementById('bootstrap3-carousel-container').appendChild(carouselContainer);
}

// Load the Bootstrap 3 carousel when the page is ready
loadBootstrap3Carousel();