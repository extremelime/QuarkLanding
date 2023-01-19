import React from 'react';

function Tutorial() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-white rounded py-10 px-8 md:py-14 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">

                <h3 className="h3 mb-3">Step 1</h3>
                <p className="text-lg mb-6">
                  Write an image query and
                <span className="rounded-lg ml-2 mr-2 px-3 font-semibold nm-shadow text-center text-white bg-indigo-600 py-1" style={{display: 'inline-block' }}>Generate</span>
                  your test image.
                </p>

                <h3 className="h3 mb-3">Step 2</h3>
                <p className="text-lg mb-6">
                  Modify the body, headers, and query params as needed.
                  Your new test image is stored as the variable&nbsp;
                  <span style={{color: 'rgb(99 102 241)', display: 'inline-block', }}>
                  "&#123;diffusionURL&#125;"
                  </span> 
                  &nbsp;in the request body.
                  </p>

                <h3 className="h3 mb-3">Step 3</h3>
                <p className="text-lg mb-6">
                  Enter the URL of the API endpoint you are testing, choose your request type, and click
                  <span className="rounded-lg ml-2 mr-2 px-3 font-semibold nm-shadow text-center text-white bg-indigo-600 py-1" style={{display: 'inline-block' }}>Send</span>.
                  <br/><br/>
                </p>
                

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tutorial;
