import { Divider } from "@nextui-org/react"

const Footer = () => {
  return (
    <div className="bg-[#10203C] bg-cover bg-bottom py-12">
      <div className="flex flex-col p-10">
        <div className="flex flex-row justify-between items-center px-5">
          <div className="w-40">
            <img src="/logoFormsDuniya.jpg" alt="" />
          </div>
          <div className="flex flex-row gap-10">
            {/* LinkedIn */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <g clip-path="url(#clip0_114_933)">
                <path d="M22.2283 0.969971H1.77167C1.30179 0.969971 0.851161 1.15663 0.518909 1.48888C0.186657 1.82113 0 2.27176 0 2.74164V23.1983C0 23.6682 0.186657 24.1188 0.518909 24.4511C0.851161 24.7833 1.30179 24.97 1.77167 24.97H22.2283C22.6982 24.97 23.1488 24.7833 23.4811 24.4511C23.8133 24.1188 24 23.6682 24 23.1983V2.74164C24 2.27176 23.8133 1.82113 23.4811 1.48888C23.1488 1.15663 22.6982 0.969971 22.2283 0.969971ZM7.15333 21.415H3.545V9.9533H7.15333V21.415ZM5.34667 8.36497C4.93736 8.36267 4.53792 8.23917 4.19873 8.01006C3.85955 7.78095 3.59584 7.4565 3.44088 7.07766C3.28591 6.69882 3.24665 6.28256 3.32803 5.88143C3.40941 5.48029 3.6078 5.11225 3.89816 4.82375C4.18851 4.53526 4.55782 4.33924 4.95947 4.26043C5.36112 4.18162 5.77711 4.22356 6.15495 4.38096C6.53279 4.53835 6.85554 4.80414 7.08247 5.14478C7.30939 5.48543 7.43032 5.88566 7.43 6.29497C7.43386 6.569 7.38251 6.84101 7.27901 7.09478C7.17551 7.34854 7.02198 7.57887 6.82757 7.77204C6.63316 7.9652 6.40185 8.11725 6.14742 8.21912C5.893 8.32099 5.62067 8.37059 5.34667 8.36497ZM20.4533 21.425H16.8467V15.1633C16.8467 13.3166 16.0617 12.7466 15.0483 12.7466C13.9783 12.7466 12.9283 13.5533 12.9283 15.21V21.425H9.32V9.96164H12.79V11.55H12.8367C13.185 10.845 14.405 9.63997 16.2667 9.63997C18.28 9.63997 20.455 10.835 20.455 14.335L20.4533 21.425Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_114_933">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.969971)" />
                </clipPath>
              </defs>
            </svg>

            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <g clip-path="url(#clip0_114_936)">
                <path d="M12 3.13273C15.206 3.13273 15.5824 3.14702 16.8496 3.20419C18.0215 3.25659 18.655 3.45191 19.079 3.61864C19.6411 3.83777 20.0413 4.09502 20.4605 4.51423C20.8797 4.93345 21.1417 5.33361 21.3561 5.89573C21.5181 6.31971 21.7182 6.9533 21.7706 8.12519C21.8277 9.39236 21.842 9.7687 21.842 12.9747C21.842 16.1808 21.8277 16.5571 21.7706 17.8243C21.7182 18.9962 21.5228 19.6298 21.3561 20.0537C21.137 20.6159 20.8797 21.016 20.4605 21.4352C20.0413 21.8544 19.6411 22.1165 19.079 22.3308C18.655 22.4928 18.0215 22.6929 16.8496 22.7453C15.5824 22.8024 15.206 22.8167 12 22.8167C8.79397 22.8167 8.41763 22.8024 7.15046 22.7453C5.97857 22.6929 5.34498 22.4976 4.921 22.3308C4.35888 22.1117 3.95872 21.8544 3.5395 21.4352C3.12029 21.016 2.85828 20.6159 2.64391 20.0537C2.48194 19.6298 2.28186 18.9962 2.22946 17.8243C2.17229 16.5571 2.158 16.1808 2.158 12.9747C2.158 9.7687 2.17229 9.39236 2.22946 8.12519C2.28186 6.9533 2.47718 6.31971 2.64391 5.89573C2.86304 5.33361 3.12029 4.93345 3.5395 4.51423C3.95872 4.09502 4.35888 3.83301 4.921 3.61864C5.34498 3.45667 5.97857 3.25659 7.15046 3.20419C8.41763 3.14226 8.79874 3.13273 12 3.13273ZM12 0.969971C8.74157 0.969971 8.33188 0.984262 7.05042 1.04143C5.77372 1.09859 4.90195 1.30344 4.13974 1.59879C3.34895 1.90367 2.68202 2.31812 2.01509 2.98506C1.34816 3.65199 0.938468 4.32368 0.628821 5.10971C0.333466 5.87192 0.128623 6.74369 0.071457 8.02515C0.0142914 9.30185 0 9.71153 0 12.97C0 16.2284 0.0142914 16.6381 0.071457 17.9196C0.128623 19.1962 0.333466 20.068 0.628821 20.835C0.933705 21.6258 1.34816 22.2927 2.01509 22.9596C2.68202 23.6266 3.35371 24.0363 4.13974 24.3459C4.90195 24.6413 5.77372 24.8461 7.05519 24.9033C8.33665 24.9604 8.74157 24.9747 12.0048 24.9747C15.268 24.9747 15.6729 24.9604 16.9544 24.9033C18.2311 24.8461 19.1028 24.6413 19.8698 24.3459C20.6606 24.041 21.3275 23.6266 21.9945 22.9596C22.6614 22.2927 23.0711 21.621 23.3807 20.835C23.6761 20.0728 23.8809 19.201 23.9381 17.9196C23.9953 16.6381 24.0095 16.2332 24.0095 12.97C24.0095 9.70677 23.9953 9.30185 23.9381 8.02039C23.8809 6.74369 23.6761 5.87192 23.3807 5.10494C23.0758 4.31415 22.6614 3.64722 21.9945 2.98029C21.3275 2.31336 20.6558 1.90367 19.8698 1.59403C19.1076 1.29867 18.2358 1.09383 16.9544 1.03666C15.6681 0.984262 15.2584 0.969971 12 0.969971Z" fill="white" />
                <path d="M12 3.13273C15.206 3.13273 15.5824 3.14702 16.8496 3.20419C18.0215 3.25659 18.655 3.45191 19.079 3.61864C19.6411 3.83777 20.0413 4.09502 20.4605 4.51423C20.8797 4.93345 21.1417 5.33361 21.3561 5.89573C21.5181 6.31971 21.7182 6.9533 21.7706 8.12519C21.8277 9.39236 21.842 9.7687 21.842 12.9747C21.842 16.1808 21.8277 16.5571 21.7706 17.8243C21.7182 18.9962 21.5228 19.6298 21.3561 20.0537C21.137 20.6159 20.8797 21.016 20.4605 21.4352C20.0413 21.8544 19.6411 22.1165 19.079 22.3308C18.655 22.4928 18.0215 22.6929 16.8496 22.7453C15.5824 22.8024 15.206 22.8167 12 22.8167C8.79397 22.8167 8.41763 22.8024 7.15046 22.7453C5.97857 22.6929 5.34498 22.4976 4.921 22.3308C4.35888 22.1117 3.95872 21.8544 3.5395 21.4352C3.12029 21.016 2.85828 20.6159 2.64391 20.0537C2.48194 19.6298 2.28186 18.9962 2.22946 17.8243C2.17229 16.5571 2.158 16.1808 2.158 12.9747C2.158 9.7687 2.17229 9.39236 2.22946 8.12519C2.28186 6.9533 2.47718 6.31971 2.64391 5.89573C2.86304 5.33361 3.12029 4.93345 3.5395 4.51423C3.95872 4.09502 4.35888 3.83301 4.921 3.61864C5.34498 3.45667 5.97857 3.25659 7.15046 3.20419C8.41763 3.14226 8.79874 3.13273 12 3.13273Z" fill="white" />
                <path d="M12 6.8103C8.59869 6.8103 5.83569 9.56854 5.83569 12.9747C5.83569 16.3808 8.59393 19.139 12 19.139C15.4062 19.139 18.1644 16.3808 18.1644 12.9747C18.1644 9.56854 15.4062 6.8103 12 6.8103ZM12 16.9715C9.78964 16.9715 7.99846 15.1803 7.99846 12.9699C7.99846 10.7595 9.78964 8.9683 12 8.9683C14.2104 8.9683 16.0016 10.7595 16.0016 12.9699C16.0016 15.1803 14.2104 16.9715 12 16.9715Z" fill="#5182A0" />
                <path d="M18.4074 8.00136C19.202 8.00136 19.8461 7.35724 19.8461 6.56269C19.8461 5.76814 19.202 5.12402 18.4074 5.12402C17.6129 5.12402 16.9688 5.76814 16.9688 6.56269C16.9688 7.35724 17.6129 8.00136 18.4074 8.00136Z" fill="#5182A0" />
              </g>
              <defs>
                <clipPath id="clip0_114_936">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.969971)" />
                </clipPath>
              </defs>
            </svg>

            {/* FaceBook */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <g clip-path="url(#clip0_114_944)">
                <path d="M17.2137 14.2982L17.8356 10.2031H13.9452V7.54677C13.9452 6.42614 14.4877 5.33318 16.2301 5.33318H18V1.84677C18 1.84677 16.3945 1.57007 14.8603 1.57007C11.6548 1.57007 9.56164 3.53186 9.56164 7.08191V10.2031H6V14.2982H9.56164V24.1985C10.2767 24.312 11.0082 24.3701 11.7534 24.3701C12.4986 24.3701 13.2301 24.312 13.9452 24.1985V14.2982H17.2137Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_114_944">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.969971)" />
                </clipPath>
              </defs>
            </svg>

            {/* Twitter */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M0.0634146 0.969971L10.1027 14.4342L0 25.3781H2.275L11.1174 15.7938L18.2634 25.3781H26L15.3979 11.1586L24.7991 0.969971H22.528L14.3832 9.79507L7.80396 0.969971H0.0634146ZM3.40854 2.64753H6.96372L22.6588 23.6966H19.1037L3.40854 2.64753Z" fill="white" />
            </svg>

            {/* Youtube */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M23.5057 7.19938C23.2289 6.17138 22.4184 5.36084 21.3904 5.08407C19.5123 4.57007 11.9999 4.57007 11.9999 4.57007C11.9999 4.57007 4.48762 4.57007 2.60954 5.0643C1.60131 5.34107 0.771002 6.17138 0.494232 7.19938C0 9.07746 0 12.972 0 12.972C0 12.972 0 16.8863 0.494232 18.7446C0.771002 19.7726 1.58154 20.5832 2.60954 20.8599C4.50739 21.3739 11.9999 21.3739 11.9999 21.3739C11.9999 21.3739 19.5123 21.3739 21.3904 20.8797C22.4184 20.6029 23.2289 19.7924 23.5057 18.7644C23.9999 16.8863 23.9999 12.9918 23.9999 12.9918C23.9999 12.9918 24.0197 9.07746 23.5057 7.19938Z" fill="white" />
              <path d="M9.60791 16.57L15.855 12.972L9.60791 9.37402V16.57Z" fill="#5182A0" />
            </svg>
          </div>
        </div>
        <Divider className="my-4 bg-slate-600" />
        <div className="flex flex-row justify-center items-center gap-10">
          <div className="text-white font-bold text-xl">About FormsDunia</div>
          <div className="text-white font-bold text-xl">Contact Us</div>
          <div className="text-white font-bold text-xl">Privacy policy</div>
          <div className="text-white font-bold text-xl">Terms & Conditions</div>
        </div>
      </div>
    </div>
  )
}

export default Footer