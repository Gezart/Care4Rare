import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import Container from './Container';

const Header = ({ mainMenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="top-header">
        {/* <Container>
        <div className="contact-item">
          <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[0].icon }}></div>
          <p>{options.contactItems[0].link?.title}</p>
        </div>
        <div className='mail-phone'>
          <div className="contact-item">
            <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[1].icon }}></div>
            <Link to={options.contactItems[1].link?.url}>{options.contactItems[1].link?.title}</Link>
          </div>
          <div className="contact-item">
            <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[2].icon }}></div>
            <Link to={options.contactItems[2].link?.url}>{options.contactItems[2].link?.title}</Link>
          </div>
        </div>
      </Container> */}
      </div>
      <Container>
        <div className="menu">
          <div className="logo">
            <Link href={`/`}>
              <svg width="98" height="79" viewBox="0 0 98 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.993 47.479C35.491 47.6307 35.989 47.7786 36.4844 47.9342C40.3446 49.148 44.1858 49.2753 48.0219 47.8056C49.9857 47.0521 51.2963 45.6929 52.0974 43.7436C53.2678 40.8992 55.2049 38.7968 58.0629 37.5714C60.9921 36.3151 62.9955 34.0931 64.3366 31.218C64.4576 30.9914 64.592 30.7724 64.7391 30.5622C65.8573 30.8026 66.2381 31.3337 66.1833 32.3971C66.1285 33.4605 65.7668 34.4403 65.2396 35.3546C64.1494 37.2551 62.8656 39 61.2456 40.4826C60.9718 40.7333 60.7705 41.0651 60.5362 41.3608L60.6521 41.51C61.2965 41.1358 61.9448 40.7694 62.5841 40.3862C65.0333 38.9216 66.9144 36.9053 68.6108 34.5998C70.5568 31.9496 71.3274 28.9934 71.7209 25.8379C71.7833 25.3441 71.9832 24.8696 72.0953 24.4749C73.1448 24.0557 74.0541 24.9237 74.0414 26.1182C74.0117 29.2738 73.3307 32.3884 72.0418 35.2633C71.1503 37.2551 70.2588 39.2392 69.3762 41.2323C68.6121 42.972 67.234 44.182 65.8942 45.4345C62.1193 48.9654 57.5573 50.7181 52.566 51.5719C49.2547 52.1364 45.9892 52.148 42.7224 51.3263C39.9919 50.6384 37.5326 49.3769 35.2082 47.8133C35.1038 47.7439 34.9854 47.6937 34.8733 47.6346L34.993 47.479Z" fill="white" />
                <path d="M47.5557 46.6163C46.8208 46.8554 46.0643 47.1949 45.2721 47.3415C42.3811 47.8738 39.5142 47.5704 36.7263 46.741C34.9891 46.2266 33.3016 45.5053 31.6383 44.7723C30.6513 44.3377 29.91 43.5186 29.4235 42.5426C27.7679 39.2161 26.1122 35.8909 24.9379 32.347C24.2655 30.3154 24.0464 28.2156 24.0006 26.09C23.9866 25.4072 24.2285 24.8389 24.8513 24.4763C25.4741 24.1136 26.0753 24.3027 26.2255 25.006C26.4255 25.9434 26.5185 26.9053 26.6738 27.8529C27.3896 32.2172 29.6986 35.6491 32.9399 38.478C34.1154 39.5067 35.4986 40.2885 36.7989 41.1655C36.9925 41.2941 37.2472 41.3326 37.4739 41.4124L37.5834 41.2645C37.4366 41.0554 37.274 40.858 37.0969 40.6743C35.3848 39.1317 33.9382 37.3128 32.8164 35.2917C32.2726 34.3221 31.7975 33.305 31.8841 32.14C31.895 31.8441 31.9693 31.5542 32.1019 31.2901C32.6788 30.2871 33.2086 30.2986 33.7996 31.2836C34.402 32.2892 34.9547 33.3333 35.6412 34.2784C36.7059 35.743 38.1782 36.7113 39.8059 37.4571C41.7927 38.3662 43.4993 39.634 44.7449 41.4754C44.899 41.7055 45.0569 41.9357 45.1881 42.1787C45.9497 43.5971 46.7036 45.0192 47.5557 46.6163Z" fill="white" />
                <path d="M30.403 15.1834L28.4569 14.9764C29.4475 11.9586 31.0862 9.19891 33.2558 6.89476C37.046 2.85972 41.7036 0.532305 47.1876 0.0796806C58.8538 -0.879574 68.2019 6.9359 70.5199 17.3938L69.1953 17.5134C65.8038 8.93928 59.7427 3.75468 50.5754 3.18633C41.4081 2.61798 34.8465 7.1275 30.403 15.1834Z" fill="white" />
                <path d="M47.3137 37.0802C46.5267 35.5796 45.8033 34.0404 44.9334 32.59C44.0555 31.1257 43.0949 29.7136 42.0563 28.3608C41.0144 27.0112 39.8965 25.7232 38.7081 24.5032C37.542 23.291 36.3007 22.155 34.9917 21.1021C33.6735 20.0281 32.2714 19.0635 30.7991 18.2179C29.3675 17.4168 27.7972 16.8716 26.3109 16.1438C31.3811 16.3843 36.399 16.8292 41.1203 19.3045C41.9583 16.9758 42.9759 14.8837 44.3768 12.996C45.765 11.1289 47.2883 9.39559 49.1171 7.90527C47.6003 10.1607 46.4426 12.5498 45.9752 15.2476C45.5078 17.9247 45.5103 20.6006 45.8402 23.3819L42.0194 22.1912C41.7125 23.0052 42.2627 23.2765 42.5976 23.6468C43.2344 24.3566 43.9795 24.997 44.5004 25.7852C46.0542 28.1332 47.0132 30.7203 47.2233 33.5595C47.3086 34.7168 47.3825 35.8857 47.4615 37.0481L47.3137 37.0802Z" fill="white" />
                <path d="M53.4639 37.8532C53.4422 37.5355 53.4206 37.416 53.4282 37.2989C53.5683 35.3573 53.702 33.4156 53.8548 31.4753C54.0548 28.928 55.4519 27.066 57.3139 25.5063C57.9507 24.9752 58.6894 24.5818 59.3517 24.0828C59.5949 23.899 59.749 23.5942 60.0279 23.2355C58.9288 22.9063 58.0564 23.1712 57.2057 23.4348C56.3549 23.6984 55.5029 24.0571 54.5681 24.4056C54.7642 20.548 54.7807 16.783 52.5647 13.4243C55.4048 15.438 57.7011 17.8618 58.7696 21.3568C59.1097 21.2784 59.4064 21.2629 59.6612 21.1421C63.1865 19.4383 66.9576 18.8275 70.8076 18.5588C71.0786 18.543 71.3505 18.5555 71.6189 18.5961C62.9483 22.4228 57.4133 29.252 53.4639 37.8532Z" fill="white" />
                <path d="M44.1514 23.8347C46.7342 24.7348 48.7274 26.2779 50.3308 28.6284C50.6263 28.4072 50.932 28.2568 51.1345 28.0163C52.2998 26.6392 55.3755 24.7683 56.9803 24.5381C56.8881 24.6586 56.7863 24.7713 56.6759 24.875C54.7247 26.3679 53.5454 28.4085 52.7558 30.6794C51.6694 33.8014 50.9524 37.0084 50.9154 40.3401C50.8838 40.4467 50.8411 40.5498 50.7881 40.6474C50.5333 39.9363 50.3041 39.3615 50.1258 38.7597C49.2941 35.9668 48.5605 33.1418 47.6245 30.3849C47.059 28.7133 46.2235 27.1394 45.4339 25.5591C45.1295 24.9534 44.6188 24.4519 44.1514 23.8347Z" fill="white" />
                <path d="M41.5099 13.8345C41.5099 15.1204 40.919 16.1568 39.9931 16.4975C38.936 16.8833 37.7095 16.4898 36.8295 15.4213C35.8475 14.2293 35.5775 12.8624 36.0399 11.385C36.5493 9.76348 38.4979 9.29671 39.9052 10.4848C40.4041 10.8861 40.8074 11.3955 41.0851 11.9753C41.3629 12.5551 41.5081 13.1905 41.5099 13.8345Z" fill="white" />
                <path d="M58.2933 17.2124C58.3163 15.4032 59.6128 13.8563 61.0519 13.8318C61.4451 13.8289 61.8299 13.9468 62.1551 14.1698C62.4804 14.3928 62.7308 14.7104 62.8732 15.0804C63.3661 16.41 62.7764 18.2951 61.6251 19.0859C60.0598 20.1531 58.5417 19.4562 58.3239 17.5698C58.3061 17.422 58.2984 17.2728 58.2933 17.2124Z" fill="white" />
                <path d="M31.3734 34.7067C31.1492 34.4379 30.8856 34.1923 30.706 33.8966C27.9945 29.4154 26.8776 24.5625 27.4049 19.3342C27.4469 18.9176 27.5577 18.5087 27.6532 18.0149L28.4174 18.3569L29.1497 18.6733C29.157 18.8624 29.1468 19.0518 29.1191 19.239C27.8455 24.4892 28.5562 29.4694 31.1034 34.2026C31.1951 34.3711 31.2728 34.5472 31.3581 34.717L31.3734 34.7067Z" fill="white" />
                <path d="M52.217 22.9809C52.1852 24.4262 51.5395 25.2749 50.3996 25.2042C49.9894 25.1664 49.6053 24.9844 49.3145 24.6898C48.4701 23.7602 48.479 22.2634 49.2432 21.254C49.6253 20.7487 50.1105 20.4941 50.7371 20.6445C51.4389 20.8117 51.8642 21.3067 52.0744 21.9728C52.175 22.2904 52.1725 22.644 52.217 22.9809Z" fill="white" />
                <path d="M69.1329 30.6882C69.3431 29.7547 69.5481 28.8198 69.7621 27.8863C70.2499 25.753 70.2779 23.6018 69.9862 21.4415C69.8742 20.6212 70.0678 20.3743 70.9312 20.4231C71.1006 23.9683 70.6918 27.4118 69.1329 30.6882Z" fill="white" />
                <path d="M76.523 77.8643H73.2499C73.2308 77.4785 73.213 77.0928 73.1862 76.5566C72.8869 76.8459 72.6768 77.0311 72.4832 77.2394C71.2223 78.6307 68.4586 78.3041 67.6168 76.6209C67.3241 76.0522 67.1352 75.435 67.059 74.7988C66.9545 73.738 66.9736 72.663 66.9775 71.5944C66.9851 69.6553 68.0689 68.4608 69.7373 67.7433C70.8441 67.2688 71.9865 66.883 73.1022 66.4574C73.1022 65.4068 73.1569 64.3807 73.0843 63.3623C73.0283 62.5805 72.6462 62.3221 71.8935 62.3336C71.0759 62.3465 70.6709 62.6654 70.5664 63.4125C70.5242 63.7538 70.5 64.0972 70.4938 64.4412C70.4811 64.7768 70.4938 65.1137 70.4938 65.4994H67.264C66.952 62.6152 68.0396 60.0499 70.8301 59.9355C71.7602 59.886 72.6928 59.9347 73.6129 60.0808C74.9387 60.3097 75.806 61.1918 76.1601 62.4815C76.3834 63.2608 76.5055 64.066 76.523 64.8771C76.5702 69.0716 76.5663 73.266 76.5765 77.4605C76.5675 77.5962 76.5496 77.731 76.523 77.8643ZM73.1009 68.3322C72.0667 68.4158 70.5855 69.4149 70.5168 70.261C70.4125 71.7272 70.4006 73.1986 70.4811 74.6663C70.5091 75.3093 71.1421 75.695 71.7089 75.632C72.6271 75.5317 73.1557 74.9595 73.162 74.0157C73.1735 72.2811 73.1697 70.5439 73.162 68.8144C73.1524 68.6524 73.132 68.4913 73.1009 68.3322Z" fill="white" />
                <path d="M21.6388 77.872H18.4256C18.4001 77.4682 18.3759 77.0812 18.3428 76.5475C18.0486 76.8176 17.8333 76.9963 17.6347 77.2007C16.1764 78.7438 13.4089 78.2989 12.59 76.3251C11.8016 74.4259 11.8526 72.4302 12.2754 70.459C12.5301 69.2515 13.377 68.4299 14.4609 67.9374C15.5447 67.4449 16.6731 67.0784 17.7824 66.6515C17.9174 66.6001 18.0537 66.5525 18.2052 66.4972C18.2052 65.4685 18.26 64.4681 18.1887 63.4742C18.1174 62.4802 17.6194 62.1806 16.6604 62.3606C16.4782 62.403 16.2984 62.4549 16.1216 62.5162C15.383 63.3957 15.6568 64.4784 15.5192 65.4968H12.404C12.1608 63.1823 12.7861 60.8304 14.7118 60.2145C16.3471 59.6899 18.0231 59.677 19.6164 60.4125C20.8339 60.9757 21.2797 62.1291 21.5268 63.3571C21.6209 63.9056 21.6635 64.4619 21.6541 65.0185C21.6771 69.2147 21.6915 73.4104 21.6974 77.6058C21.6858 77.6961 21.6662 77.7852 21.6388 77.872ZM18.2307 68.3257L18.0257 68.165C17.3889 68.5906 16.6998 68.9635 16.1153 69.4637C15.8096 69.7286 15.5332 70.2069 15.5167 70.6004C15.4606 71.9403 15.4925 73.2879 15.5587 74.629C15.588 75.2257 16.0936 75.6783 16.6209 75.6153C17.6181 75.4983 18.2524 75.2591 18.2383 74.0092C18.2192 72.3003 18.2383 70.5901 18.2383 68.8812C18.2524 68.696 18.2307 68.5109 18.2307 68.3257Z" fill="white" />
                <path d="M97.8838 69.1437H91.8979C91.8381 69.3018 91.7706 69.4009 91.7706 69.4973C91.8062 71.1445 91.805 72.7943 91.9069 74.4376C91.9705 75.4547 92.9729 75.9318 93.886 75.4933C94.3878 75.2515 94.5228 74.8169 94.5228 74.336C94.5419 73.333 94.5228 72.3301 94.5228 71.2705H97.8431C97.8431 71.9649 97.9309 72.6734 97.8227 73.351C97.6607 74.3779 97.4193 75.3904 97.1006 76.3792C96.8726 77.0826 96.2485 77.5082 95.5723 77.7422C94.0439 78.2707 92.4812 78.3299 90.9504 77.7898C89.4195 77.2498 88.8553 75.9575 88.5739 74.4813C88.5295 74.2935 88.5027 74.1019 88.4936 73.9091C88.5013 70.5067 88.4147 67.1004 88.5662 63.7045C88.6643 61.4979 90.2614 60.0938 92.4532 59.9343C93.1937 59.8831 93.9374 59.902 94.6744 59.9909C96.0944 60.1568 97.1821 61.1662 97.5272 62.6436C97.7121 63.4125 97.8234 64.1974 97.8596 64.9878C97.9233 66.3456 97.8838 67.7112 97.8838 69.1437ZM94.5266 67.3743C94.5266 66.0769 94.5266 64.8258 94.5266 63.5733C94.5182 63.4244 94.4882 63.2775 94.4375 63.1374C94.2681 62.5986 93.9484 62.2373 93.3422 62.2566C92.736 62.2759 92.0839 62.4868 92.0036 63.1156C91.8266 64.5159 91.8139 65.938 91.7324 67.3743H94.5266Z" fill="white" />
                <path d="M43.0391 69.1744H36.9259C36.8933 69.3974 36.872 69.6218 36.8622 69.8469C36.8787 71.1958 36.8927 72.5473 36.9297 73.8923C36.973 75.4533 37.8212 75.9818 39.3164 75.3376C39.9405 74.0762 39.5125 72.6488 39.7239 71.2537H43.0073C42.9843 73.0796 43.1512 74.8914 42.1603 76.5116C41.9553 76.8472 41.6802 77.2098 41.3478 77.3821C39.4514 78.3696 37.5028 78.4828 35.5606 77.5107C34.6945 77.0799 34.1596 76.3187 33.9418 75.389C33.7444 74.5403 33.5674 73.6647 33.5534 72.798C33.5088 70.0385 33.4884 67.2752 33.5801 64.517C33.6094 63.6529 33.9546 62.7747 34.2781 61.9517C34.5926 61.1494 35.2549 60.5977 36.0611 60.2955C37.7168 59.6719 39.3928 59.6616 41.0077 60.3959C42.1349 60.9102 42.6354 61.9877 42.7729 63.1347C42.9601 64.6996 42.9652 66.2877 43.0391 67.8667C43.0544 68.2692 43.0391 68.6704 43.0391 69.1744ZM39.6832 67.3935C39.6832 66.9332 39.6959 66.4934 39.6832 66.0627C39.6488 65.1253 39.6832 64.175 39.5316 63.2569C39.3737 62.3015 38.5446 61.9942 37.6887 62.4442C37.4595 62.5606 37.2673 62.7398 37.1342 62.9613C37.001 63.1827 36.9324 63.4376 36.936 63.6967C36.894 64.8282 36.8902 65.9598 36.88 67.0926C36.8981 67.1975 36.932 67.299 36.9806 67.3935H39.6832Z" fill="white" />
                <path d="M54.2046 74.2202V77.8772H51.241V74.2767H45.5939C45.6486 73.266 45.5124 72.3029 45.776 71.4697C47.1273 67.2109 48.5779 62.983 50.0005 58.7499C50.189 58.1842 50.3686 57.6158 50.5673 57.0024H54.1677V71.7166H55.8845V74.2202H54.2046ZM51.1964 61.953C50.7876 62.2526 48.2429 71.0376 48.3308 71.6896H51.1964V61.953Z" fill="white" />
                <path d="M9.30032 66.9306H6.05138C6.05138 65.8492 6.07048 64.8064 6.05138 63.7661C6.02973 62.8789 5.6935 62.4456 5.04269 62.3645C4.23778 62.263 3.64938 62.6474 3.42778 63.4678C3.34356 63.7987 3.30288 64.1394 3.30679 64.4811C3.29999 67.4154 3.30297 70.3493 3.3157 73.2828C3.31665 73.7108 3.35931 74.1376 3.44306 74.5571C3.58952 75.272 4.11807 75.6411 4.84401 75.5858C5.53812 75.5356 5.97879 75.1357 6.03355 74.4002C6.11761 73.2725 6.14817 72.141 6.20421 70.9477H9.36654C9.35126 72.5936 9.46334 74.2241 8.85711 75.7735C8.38206 76.9642 7.57078 77.7293 6.25898 77.9826C5.21611 78.183 4.14421 78.1721 3.10556 77.9505C1.69187 77.6599 0.824555 76.7791 0.405543 75.4328C0.223419 74.8438 0.0425686 74.2228 0.034927 73.6146C-0.000733607 70.5992 -0.0287529 67.5813 0.0540306 64.5672C0.0782289 63.6761 0.378797 62.758 0.717573 61.9196C1.1888 60.7546 2.20004 60.149 3.39212 60.0063C4.31811 59.8944 5.25402 59.8944 6.18001 60.0063C7.58861 60.1811 8.51578 61.035 8.93989 62.4173C9.3156 63.6003 9.51301 66.0601 9.30032 66.9306Z" fill="white" />
                <path d="M61.7342 61.6921C62.3111 61.1405 62.706 60.6184 63.2256 60.306C63.7248 60.0064 64.3514 59.9202 65.0213 59.717V62.3119C64.2954 62.5009 63.5312 62.645 62.804 62.9008C61.845 63.2377 61.7635 63.4332 61.7673 64.4683C61.7792 68.8325 61.7868 73.1972 61.7902 77.5623C61.7799 77.6621 61.762 77.7609 61.7368 77.858H58.4343V60.1131H61.7342V61.6921Z" fill="white" />
                <path d="M83.2286 77.8772H79.902V60.1194H83.1662V61.5171L83.3279 61.6226C83.4897 61.476 83.6846 61.3538 83.8055 61.1777C84.4551 60.2339 85.3466 59.8352 86.531 59.879V62.398C86.3451 62.4211 86.1209 62.4391 85.9006 62.4777C85.4812 62.5301 85.0658 62.6117 84.6576 62.722C83.3611 63.1438 83.2082 63.3829 83.2108 64.7447C83.2184 68.6837 83.2244 72.6232 83.2286 76.563V77.8772Z" fill="white" />
                <path d="M25.0266 60.0951H28.2819V61.552L28.4602 61.6574C28.6762 61.4626 28.8767 61.2511 29.0601 61.0247C29.688 60.1246 30.5884 59.8932 31.6697 59.8906V62.3055C30.9323 62.4881 30.1821 62.6167 29.4715 62.8623C28.4526 63.2133 28.3125 63.4795 28.3138 64.5737C28.3138 68.6816 28.3138 72.7904 28.3138 76.9C28.3138 77.1958 28.3405 77.4928 28.3571 77.8477H25.0266V60.0951Z" fill="white" />
              </svg>
            </Link>
            {/* <svg className="menu-toggler" onClick={() => {
              setIsOpen(!isOpen);

            }} fill="#111827" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" /></svg> */}
          </div>

          <nav className={`navigation ${isOpen ? "active" : ""}`} >
            {/* <svg className='close-menu' onClick={() => setIsOpen(!isOpen)} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z" /></svg> */}
            <ul>
              {
                mainMenu.map((item, index) =>
                  <li key={index}>
                    <Link href={item.uri}>{item.label}</Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header