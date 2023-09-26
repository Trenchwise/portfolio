import React from "react";
// import Burger from "../assets/images/Burger.svg";

const Header = () => {
  return (
    <>
      <div id="headerContainer">
        <div className="nameTitle">
          <h1>Tanya French</h1>
        </div>

        <div id="burgerWrapper">
          {/* starting working from this point - it contains the whole burger bumph */}
          <nav className="burgerNav" tableindex="0">
            {/* <input
              type="checkBox"
              id="checkBox"
              className="burgerMenuCheckBox"
            />
            <label for="checkBox" className="burgerNavCheckBox">
              hello
            </label> */}

            {/* this contains the bits with the burger svg */}
            <ul className="burgerMenu" tabIndex={0}>
              <li className="burgerMenuSvg">
                <a href="#"></a>
                <svg
                  id="burgerSvg"
                  viewBox="0 -10 166 166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g clip-path="url(#clip0)">
                      {" "}
                      <path
                        d="M9.40077 124.121C9.16337 124.004 8.91292 123.916 8.6553 123.858C2.48574 123.464 -0.326766 120.152 0.920275 114.075C1.65236 110.572 2.81123 107.172 4.37118 103.951C5.34781 101.928 7.35949 100.407 8.85463 98.7163C8.35975 96.5504 7.39067 94.2224 7.42086 91.9055C7.44974 89.6634 8.50664 87.4345 9.16101 85.0199C4.29232 80.4741 4.15697 79.5014 7.60798 71.6174C5.69805 69.6412 5.48777 67.2489 5.7864 64.5289C6.61076 57.0329 7.59466 49.5781 10.4602 42.5448C17.7456 24.6668 30.663 12.3986 48.7182 6.00781C70.6433 -1.75207 92.7776 -1.8683 114.603 6.65949C124.687 10.5975 133.589 16.4698 139.945 25.4787C142.462 28.913 144.574 32.6258 146.24 36.5439C148.448 42.0381 150.021 47.7974 151.676 53.499C152.828 57.4653 153.186 61.4808 150.298 65.2069C152.995 67.3867 155.341 69.5592 156.473 72.745C157.645 76.0412 156.76 78.91 154.874 81.7703C158.324 85.2935 158.819 89.4219 157.274 94.0911C160.195 96.3286 162.867 98.8975 164.072 102.533C164.769 104.417 165.218 106.384 165.409 108.384C165.775 114.828 163.249 117.688 156.992 118.422C156.841 121.313 156.813 124.194 156.518 127.046C155.918 132.854 152.551 136.623 147.051 137.994C141.817 139.242 136.509 140.162 131.16 140.751C121.131 141.957 111.086 143.081 101.019 143.88C84.4355 145.192 67.8171 145.787 51.2071 144.354C41.9304 143.554 32.6706 142.535 23.4261 141.422C20.7643 141.028 18.1531 140.346 15.6391 139.387C14.1285 138.891 12.7979 137.961 11.8152 136.711C10.8326 135.461 10.2417 133.949 10.1167 132.364C9.77016 129.609 9.62721 126.825 9.40077 124.121ZM145.649 61.9468C144.221 55.9512 143.06 50.2569 141.481 44.6813C139.948 38.9205 137.317 33.51 133.731 28.7473C127.468 20.633 119.118 15.5805 109.743 12.0586C95.5342 6.72191 80.8375 5.75775 65.9747 8.21573C45.2744 11.6353 28.7342 21.3366 18.6299 40.4852C14.5901 48.1401 12.7056 56.3462 11.2262 64.9784C12.3095 65.4288 13.4298 65.7859 14.5739 66.0458C18.3426 66.5472 22.1341 67.3368 25.9054 67.2751C40.715 67.031 55.5191 66.4658 70.3276 66.0937C82.3346 65.7918 94.3436 65.6026 106.352 65.3472C117.347 65.1142 128.347 64.9076 139.242 63.1761C141.314 62.846 143.366 62.3885 145.649 61.9468ZM135.464 114.167C133.633 115.582 131.903 116.792 130.316 118.173C127.432 120.677 124.363 121.105 121.005 119.283C119.698 118.639 118.435 117.909 117.225 117.098C114.148 114.856 111.162 114.646 107.919 116.844C105.752 118.242 103.498 119.503 101.172 120.616C99.2839 121.632 97.1764 122.171 95.0321 122.184C92.8885 122.197 90.7738 121.685 88.8737 120.692C87.1672 119.85 85.4837 118.947 83.8612 117.954C82.9306 117.314 81.8417 116.945 80.7141 116.888C79.5865 116.829 78.4648 117.085 77.4731 117.626C75.4883 118.658 73.5042 119.711 71.6179 120.908C70.2252 121.872 68.6027 122.452 66.9139 122.591C65.2256 122.729 63.5301 122.42 61.9988 121.695C60.0438 120.854 58.1868 119.801 56.4603 118.557C53.5869 116.414 50.684 116.281 47.6491 117.914C45.877 118.868 44.1957 119.997 42.4952 121.081C38.1194 123.872 33.817 123.651 29.5902 120.776C28.5709 120.083 27.6086 119.304 26.6405 118.538C24.1149 116.54 21.4895 116.517 18.8503 118.226C17.6637 118.995 16.5979 119.949 15.6469 120.687C16.0407 123.197 16.3224 125.309 16.7031 127.402C17.5373 131.991 17.8252 132.266 22.3205 133.215C22.6486 133.285 22.9889 133.302 23.3204 133.36C37.2672 135.715 51.3705 137.027 65.5125 137.283C88.2475 137.842 110.771 135.153 133.274 132.364C136.714 131.938 140.13 131.252 143.524 130.531C145.99 130.006 147.338 128.312 147.58 125.793C147.777 123.722 147.943 121.648 148.139 119.374C143.006 119.939 139.155 117.899 135.464 114.167ZM7.35162 117.514C8.8822 116.738 10.079 116.209 11.1954 115.545C12.3492 114.856 13.3933 113.985 14.5393 113.281C20.0762 109.88 25.0314 110.189 30.0767 114.215C30.7768 114.775 31.4725 115.342 32.1643 115.916C34.4313 117.793 36.7783 117.95 39.2783 116.35C41.0425 115.158 42.8701 114.062 44.7532 113.068C49.7781 110.574 54.6643 110.601 59.2908 114.151C60.4655 115.011 61.706 115.778 63.0006 116.444C63.9186 116.998 64.9814 117.264 66.0522 117.207C67.1227 117.151 68.1518 116.774 69.0063 116.126C70.8513 114.854 72.8013 113.741 74.8353 112.799C78.8613 110.978 82.8636 110.961 86.6815 113.516C87.7041 114.201 88.8107 114.759 89.8654 115.397C91.2739 116.34 92.9246 116.856 94.6193 116.882C96.3139 116.909 97.9804 116.446 99.4178 115.548C101.555 114.317 103.725 113.137 105.811 111.824C110.274 109.018 114.621 109.16 119.103 111.861C124.607 115.179 124.652 115.105 129.744 111.298C134.01 108.107 137.217 108.002 141.797 110.937C143.076 111.756 144.314 112.643 145.67 113.566C147.442 111.357 147.938 107.741 151.138 107.964C153.632 108.138 156.038 109.631 158.554 110.564C161.072 106.775 158.865 100.366 154.277 97.9261C150.545 99.0419 147.181 100.348 143.696 101.042C130.679 103.638 117.423 104.085 104.239 105.191C97.7966 105.732 91.3363 104.94 84.9002 105.721C83.6801 105.868 82.3543 105.099 81.0712 104.776C79.8162 104.459 78.5534 103.907 77.2952 103.909C63.9407 103.934 50.5822 104.233 37.2323 104.058C30.8658 103.975 24.508 102.999 18.1395 102.521C16.9271 102.421 15.7074 102.58 14.5604 102.985C9.86697 104.754 6.8994 110.526 7.35162 117.516V117.514ZM52.4287 72.9091C52.4663 73.1349 52.5035 73.3607 52.5402 73.5865C61.5629 80.5863 70.5389 87.6472 79.6266 94.5604C84.32 98.1309 83.6538 99.3989 88.77 93.9277C94.7427 87.5441 100.434 80.9007 106.234 74.3577C106.726 73.8024 107.113 73.1533 108.002 71.9194L52.4287 72.9091ZM71.3022 97.2021C67.8479 94.2998 64.9876 91.9744 62.2244 89.5387C60.9518 88.4164 59.6588 88.1762 57.9582 88.2038C45.5141 88.4007 33.0656 89.6589 20.6175 88.1348C19.0993 87.9491 17.5073 88.316 15.9571 88.4702C14.4521 88.6192 13.8956 89.6438 13.7676 91.003C13.5937 92.85 14.3554 94.1574 16.459 94.7008C19.0418 95.4569 21.6989 95.9321 24.3837 96.1185C38.8514 96.6351 53.3279 96.9816 67.7974 97.3721C68.6644 97.3984 69.538 97.2953 71.3022 97.2048V97.2021ZM150.94 84.8092C146.771 85.877 142.922 87.2409 138.961 87.8054C127.538 89.4836 116.005 90.3027 104.459 90.2555C103.715 90.1852 102.97 90.3795 102.355 90.8035C100.201 93.0173 98.1845 95.3637 95.8512 97.9622C99.2222 97.9622 102.004 98.1374 104.758 97.9307C114.817 97.1779 124.884 96.4703 134.911 95.3893C139.696 94.8656 144.422 93.9021 149.03 92.5113C153.188 91.2629 153.726 88.2083 150.94 84.8118V84.8092ZM109.101 82.705C110.625 82.705 111.52 82.7542 112.407 82.6971C119.789 82.2252 127.202 82.0106 134.538 81.1468C139.185 80.4898 143.763 79.4075 148.213 77.9137C151.065 77.0257 151.625 75.3835 150.828 73.0102C149.899 70.247 147.898 68.8188 145.446 69.2802C137.513 70.7773 129.464 71.5708 121.391 71.6522C119.84 71.6673 118.291 71.8012 117.287 71.8491L109.101 82.705ZM13.9919 71.7297C13.1943 73.1572 12.4773 74.6281 11.8447 76.1363C11.0939 78.2497 11.37 78.9468 13.5734 79.6891C15.7994 80.4426 18.0934 80.9794 20.4226 81.2925C29.9224 82.5396 39.4625 81.9935 48.9925 81.7172C49.8539 81.6128 50.7076 81.45 51.5467 81.2295C50.0096 80.0639 48.9756 79.231 47.8914 78.4696C46.24 77.3099 44.2389 76.4704 42.9688 74.991C41.6562 73.4637 40.2908 73.3055 38.5712 73.3036C30.5049 73.2964 22.4088 73.826 13.9919 71.7297Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M69.0435 23.3343C69.1938 22.0302 68.966 20.665 70.5215 20.1688C72.0436 19.6831 73.1954 20.4352 73.8236 21.7696C74.5048 23.1699 75.0398 24.6374 75.4178 26.1481C75.7381 27.512 75.4683 28.8824 73.9338 29.5059C72.5791 30.0559 71.1116 29.4257 70.3968 27.7856C69.8553 26.3309 69.4038 24.8443 69.0435 23.3343Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M44.626 41.4375C45.1242 41.7853 46.3398 42.1909 46.5348 42.8814C46.653 43.3887 46.6592 43.9158 46.5533 44.4257C46.4475 44.9358 46.2317 45.4165 45.9214 45.8349C44.2536 47.6287 41.8824 48.1978 39.515 48.2864C37.8033 48.352 37.042 46.3903 38.2024 44.7915C39.6404 42.8146 41.7053 41.7453 44.626 41.4375Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M125.62 56.5963C124.534 55.7883 123.327 55.3276 123.021 54.5242C122.777 53.8837 123.396 52.5048 124.052 52.0197C125.379 51.0059 126.884 50.2527 128.491 49.7999C129.333 49.584 130.916 50.1281 131.29 50.8113C131.44 51.309 131.461 51.8368 131.35 52.3448C131.24 52.8529 131.002 53.3245 130.659 53.715C129.254 54.8761 127.472 55.5816 125.62 56.5963Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M89.1322 46.1309C89.039 43.9466 90.6785 42.8539 92.4743 43.6756C94.1118 44.4245 95.9949 48.0915 95.6825 49.9214C95.4022 51.5622 93.7961 52.4199 92.4533 51.4774C90.7015 50.1872 89.5122 48.2731 89.1322 46.1309Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M120.778 31.3896C120.765 33.3455 118.087 36.0358 116.152 36.0306C114.932 36.0273 113.78 34.6739 114.385 33.4407C115.123 31.862 116.221 30.4786 117.592 29.4015C119.052 28.3396 120.791 29.5952 120.778 31.3896Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M61.8242 60.6067C59.76 60.4892 57.3442 58.0436 57.3843 56.3503C57.405 56.0152 57.4936 55.6877 57.6439 55.3874C57.7942 55.0872 58.0033 54.8206 58.2592 54.6032C58.5151 54.3859 58.8129 54.2224 59.1335 54.1227C59.4541 54.023 59.7916 53.9891 60.1257 54.023C61.7521 54.2317 63.6144 56.6548 63.5619 58.505C63.5251 59.7888 63.0857 60.7032 61.8242 60.6067Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0">
                        {" "}
                        <rect
                          width="165.397"
                          height="145.707"
                          fill="white"
                          transform="translate(0.602539 0.0263672)"
                        ></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              </li>

              <ul className="burgerMenuProper">
                <li>
                  {" "}
                  <a href="#"></a> Work
                </li>
                <li>
                  {" "}
                  <a href="#"></a>Contact
                </li>
                <li>
                  {" "}
                  <a href="#"></a>About
                </li>
                {/* do I need to add an i tag here? What is it for */}
              </ul>
              <label htmlFor="check" className="openBurgerMenu"></label>
            </ul>
          </nav>
        </div>
        <div id="navBarItemsWrapper">
          {/* <div id="navSpacer"></div> */}
          <div className="navBarItems">
            <p>Work</p>
          </div>
          <div className="navBarItems">
            <p>Contact</p>
          </div>
          <div className="navBarItems">
            <p>About</p>
          </div>
        </div>
      </div>
      <h2 id="jobTitle">Frontend Developer</h2>
      <div className="sectionLine" id="navBarSectionLine"></div>
    </>
  );
};

export default Header;
