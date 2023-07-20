import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import GatePass from "../Multistep/gatepass";
import "./Gatepass.css";
import { FaEye, FaEdit, FaDownload, FaPlay, FaPen } from "react-icons/fa";

const TableComponent = () => {
    const [showIcons, setShowIcons] = useState(false);

    const handleCheckboxChange = (event) => {
        setShowIcons(event.target.checked);
      };

      
  const data = [
    {
      id: 1,
      slipNo: "001",
      date: "2023-07-01",
      programmer: "John Doe",
      status: "Delivered",
    },
    {
      id: 2,
      slipNo: "002",
      date: "2023-07-02",
      programmer: "Jane Smith",
      status: "Not Delivered",
    },
    // Add more data as needed
  ];

  const navigate = useNavigate();


  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr style={{ background: "#f0f0f0", height: "31px" }}>
          <th>
            <input type="checkbox" />
          </th>
          <th>Field</th>
          <th>field</th>
          <th>field</th>
          <th>field</th>
          <th>field</th>
          <th>field</th>
          <th>field</th>
          <th>field</th>
          <th>field</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead> 
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" checked={showIcons}
              onChange={handleCheckboxChange} />
            </td>
            <td>
              <img src="image.png" />
            </td>
            <td>Field</td>
            <td>Field</td>
            <td>Field</td>
            <td>Field</td>
            <td>Field</td>
            <td>Field</td>
            <td>Field</td>
            <td>Field</td>
            <td  style={{ width: "78px"}}>
              {/* <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div> */}
              <div
                className="progress"
                style={{ height: "0.55rem", marginRight: '15px' }}
              >
                <div
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </td>
            <td style={{ width: "20px"}}>
            {showIcons && (
              <span className='action-wrapper'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="action-icon"
                
                >
                  <path
                    d="M14.3838 4.40942L11.5913 1.6163C11.4752 1.50017 11.3374 1.40805 11.1857 1.3452C11.034 1.28235 10.8714 1.25 10.7072 1.25C10.543 1.25 10.3804 1.28235 10.2287 1.3452C10.077 1.40805 9.93921 1.50017 9.82313 1.6163L2.11626 9.3238C1.99976 9.43953 1.90739 9.57725 1.84452 9.72895C1.78165 9.88065 1.74953 10.0433 1.75001 10.2075V13.0007C1.75001 13.3322 1.8817 13.6501 2.11612 13.8846C2.35054 14.119 2.66848 14.2507 3.00001 14.2507H5.79313C5.95734 14.2511 6.12001 14.219 6.27171 14.1561C6.42341 14.0932 6.56112 14.0009 6.67688 13.8844L14.3838 6.17692C14.6181 5.94251 14.7497 5.62463 14.7497 5.29317C14.7497 4.96172 14.6181 4.64383 14.3838 4.40942ZM5.68751 12.7507H3.25001V10.3132L8.50001 5.06317L10.9375 7.50067L5.68751 12.7507ZM12 6.43817L9.56251 4.00067L10.7088 2.85442L13.1463 5.29192L12 6.43817Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
            </td>
            <td style={{ width: "20px"}}>
            {showIcons && (
              <span className='action-wrapper'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="action-icon"
                >
                  <path
                    d="M12.5 1.75H10C9.66848 1.75 9.35054 1.8817 9.11612 2.11612C8.8817 2.35054 8.75 2.66848 8.75 3V13C8.75 13.3315 8.8817 13.6495 9.11612 13.8839C9.35054 14.1183 9.66848 14.25 10 14.25H12.5C12.8315 14.25 13.1495 14.1183 13.3839 13.8839C13.6183 13.6495 13.75 13.3315 13.75 13V3C13.75 2.66848 13.6183 2.35054 13.3839 2.11612C13.1495 1.8817 12.8315 1.75 12.5 1.75ZM12.25 12.75H10.25V3.25H12.25V12.75ZM6 1.75H3.5C3.16848 1.75 2.85054 1.8817 2.61612 2.11612C2.3817 2.35054 2.25 2.66848 2.25 3V13C2.25 13.3315 2.3817 13.6495 2.61612 13.8839C2.85054 14.1183 3.16848 14.25 3.5 14.25H6C6.33152 14.25 6.64946 14.1183 6.88388 13.8839C7.1183 13.6495 7.25 13.3315 7.25 13V3C7.25 2.66848 7.1183 2.35054 6.88388 2.11612C6.64946 1.8817 6.33152 1.75 6 1.75ZM5.75 12.75H3.75V3.25H5.75V12.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
            </td>
            <td style={{ width: "20px"}}>
            {showIcons && (
              <span className='action-wrapper'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="action-icon"
                >
                  <path
                    d="M14.6556 6.94277L5.65063 1.43465C5.46178 1.31952 5.24577 1.25656 5.02464 1.2522C4.80351 1.24783 4.58518 1.30222 4.39194 1.4098C4.19869 1.51738 4.03746 1.67431 3.92468 1.86457C3.8119 2.05483 3.75162 2.27161 3.75 2.49277V13.509C3.75162 13.7302 3.8119 13.947 3.92468 14.1372C4.03746 14.3275 4.19869 14.4844 4.39194 14.592C4.58518 14.6996 4.80351 14.754 5.02464 14.7496C5.24577 14.7452 5.46178 14.6823 5.65063 14.5671L14.6556 9.05902C14.8372 8.94849 14.9873 8.79309 15.0914 8.60778C15.1956 8.42247 15.2503 8.21347 15.2503 8.0009C15.2503 7.78832 15.1956 7.57933 15.0914 7.39401C14.9873 7.2087 14.8372 7.0533 14.6556 6.94277ZM5.25 13.054V2.94777L13.51 8.0009L5.25 13.054Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
            </td>
            <td style={{ width: "20px"}}>
            {showIcons && (
              <span className='action-wrapper'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="action-icon"
                >
                  <path
                    d="M14.25 9.5V13C14.25 13.3315 14.1183 13.6495 13.8839 13.8839C13.6495 14.1183 13.3315 14.25 13 14.25H3C2.66848 14.25 2.35054 14.1183 2.11612 13.8839C1.8817 13.6495 1.75 13.3315 1.75 13V9.5C1.75 9.30109 1.82902 9.11032 1.96967 8.96967C2.11032 8.82902 2.30109 8.75 2.5 8.75C2.69891 8.75 2.88968 8.82902 3.03033 8.96967C3.17098 9.11032 3.25 9.30109 3.25 9.5V12.75H12.75V9.5C12.75 9.30109 12.829 9.11032 12.9697 8.96967C13.1103 8.82902 13.3011 8.75 13.5 8.75C13.6989 8.75 13.8897 8.82902 14.0303 8.96967C14.171 9.11032 14.25 9.30109 14.25 9.5ZM7.46938 10.0306C7.53905 10.1005 7.62185 10.156 7.71301 10.1939C7.80417 10.2317 7.90191 10.2512 8.00062 10.2512C8.09934 10.2512 8.19707 10.2317 8.28824 10.1939C8.3794 10.156 8.4622 10.1005 8.53187 10.0306L11.0319 7.53062C11.1728 7.38973 11.2519 7.19863 11.2519 6.99937C11.2519 6.80012 11.1728 6.60902 11.0319 6.46812C10.891 6.32723 10.6999 6.24807 10.5006 6.24807C10.3014 6.24807 10.1103 6.32723 9.96937 6.46812L8.75 7.6875V2.5C8.75 2.30109 8.67098 2.11032 8.53033 1.96967C8.38968 1.82902 8.19891 1.75 8 1.75C7.80109 1.75 7.61032 1.82902 7.46967 1.96967C7.32902 2.11032 7.25 2.30109 7.25 2.5V7.6875L6.03062 6.46938C5.88973 6.32848 5.69863 6.24932 5.49937 6.24932C5.30012 6.24932 5.10902 6.32848 4.96812 6.46938C4.82723 6.61027 4.74807 6.80137 4.74807 7.00063C4.74807 7.19988 4.82723 7.39098 4.96812 7.53188L7.46938 10.0306Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
            </td>
            <td style={{ width: "20px"}}>
            {showIcons && (
              <span className='action-wrapper'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="action-icon"
                >
                  <path
                    d="M5.4684 9.46987L9.4684 5.46987C9.53817 5.4001 9.62099 5.34476 9.71214 5.307C9.80329 5.26925 9.90099 5.24981 9.99965 5.24981C10.0983 5.24981 10.196 5.26925 10.2872 5.307C10.3783 5.34476 10.4611 5.4001 10.5309 5.46987C10.6007 5.53963 10.656 5.62245 10.6938 5.71361C10.7315 5.80476 10.751 5.90245 10.751 6.00112C10.751 6.09978 10.7315 6.19747 10.6938 6.28863C10.656 6.37978 10.6007 6.4626 10.5309 6.53237L6.5309 10.5324C6.39001 10.6733 6.19891 10.7524 5.99965 10.7524C5.8004 10.7524 5.6093 10.6733 5.4684 10.5324C5.32751 10.3915 5.24835 10.2004 5.24835 10.0011C5.24835 9.80186 5.32751 9.61076 5.4684 9.46987ZM13.6559 2.34487C12.9519 1.6425 11.9981 1.24805 11.0037 1.24805C10.0093 1.24805 9.05548 1.6425 8.35153 2.34487L6.46903 4.22549C6.32813 4.36639 6.24898 4.55748 6.24898 4.75674C6.24898 4.8554 6.26841 4.9531 6.30617 5.04425C6.34392 5.1354 6.39926 5.21823 6.46903 5.28799C6.53879 5.35776 6.62161 5.4131 6.71277 5.45085C6.80392 5.48861 6.90162 5.50804 7.00028 5.50804C7.19953 5.50804 7.39063 5.42889 7.53153 5.28799L9.4109 3.40924C9.83293 2.98713 10.4054 2.74996 11.0022 2.7499C11.5991 2.74984 12.1716 2.9869 12.5937 3.40893C13.0158 3.83095 13.253 4.40338 13.2531 5.00027C13.2531 5.59716 13.0161 6.16963 12.594 6.59174L10.7122 8.46987C10.6424 8.53963 10.587 8.62245 10.5493 8.71361C10.5115 8.80476 10.4921 8.90245 10.4921 9.00112C10.4921 9.09978 10.5115 9.19747 10.5493 9.28863C10.587 9.37978 10.6424 9.4626 10.7122 9.53237C10.7819 9.60213 10.8647 9.65747 10.9559 9.69523C11.047 9.73298 11.1447 9.75242 11.2434 9.75242C11.3421 9.75242 11.4398 9.73298 11.5309 9.69523C11.6221 9.65747 11.7049 9.60213 11.7747 9.53237L13.6547 7.65362C14.3574 6.94923 14.7519 5.99477 14.7515 4.99979C14.7512 4.00481 14.356 3.05063 13.6528 2.34674L13.6559 2.34487ZM8.46965 10.7124L6.59028 12.5924C6.38127 12.8013 6.13315 12.9671 5.86009 13.0802C5.58702 13.1932 5.29436 13.2514 4.99881 13.2514C4.70325 13.2514 4.4106 13.1931 4.13756 13.08C3.86452 12.9669 3.61643 12.8011 3.40746 12.5921C2.98544 12.1699 2.74838 11.5975 2.74844 11.0006C2.7485 10.4037 2.98567 9.83127 3.40778 9.40924L5.28653 7.52987C5.35629 7.4601 5.41163 7.37728 5.44939 7.28613C5.48715 7.19497 5.50658 7.09728 5.50658 6.99862C5.50658 6.89995 5.48715 6.80226 5.44939 6.71111C5.41163 6.61995 5.35629 6.53713 5.28653 6.46737C5.21676 6.3976 5.13394 6.34226 5.04279 6.3045C4.95164 6.26675 4.85394 6.24731 4.75528 6.24731C4.65662 6.24731 4.55892 6.26675 4.46777 6.3045C4.37661 6.34226 4.29379 6.3976 4.22403 6.46737L2.34653 8.34862C1.99824 8.69695 1.72197 9.11047 1.53349 9.56557C1.34501 10.0207 1.24802 10.5084 1.24805 11.001C1.24811 11.9958 1.64335 12.9499 2.34684 13.6533C3.05033 14.3567 4.00443 14.7518 4.99925 14.7518C5.99407 14.7517 6.94812 14.3565 7.65153 13.653L9.53028 11.7736C9.67117 11.6327 9.75033 11.4416 9.75033 11.2424C9.75033 11.0431 9.67117 10.852 9.53028 10.7111C9.38938 10.5702 9.19829 10.4911 8.99903 10.4911C8.79977 10.4911 8.60867 10.5702 8.46778 10.7111L8.46965 10.7124Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
            </td>
            <td style={{ width: "20px"}}>
            {showIcons && (
              <span className=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="">
                <path d="M21.0459 12.7959L14.2959 19.5459C14.0846 19.7572 13.7979 19.8759 13.4991 19.8759C13.2002 19.8759 12.9135 19.7572 12.7022 19.5459C12.4908 19.3345 12.3721 19.0479 12.3721 18.749C12.3721 18.4501 12.4908 18.1635 12.7022 17.9521L17.5312 13.1249H3.75C3.45163 13.1249 3.16548 13.0064 2.9545 12.7954C2.74353 12.5844 2.625 12.2983 2.625 11.9999C2.625 11.7016 2.74353 11.4154 2.9545 11.2044C3.16548 10.9934 3.45163 10.8749 3.75 10.8749H17.5312L12.7041 6.04492C12.4927 5.83358 12.374 5.54693 12.374 5.24804C12.374 4.94916 12.4927 4.66251 12.7041 4.45117C12.9154 4.23983 13.2021 4.12109 13.5009 4.12109C13.7998 4.12109 14.0865 4.23983 14.2978 4.45117L21.0478 11.2012C21.1527 11.3058 21.2359 11.4302 21.2926 11.5671C21.3493 11.704 21.3784 11.8507 21.3782 11.9989C21.3781 12.1471 21.3486 12.2938 21.2916 12.4305C21.2346 12.5673 21.1511 12.6914 21.0459 12.7959Z" fill="#3C83F7"/>
             </svg>
              </span>
              )}
            </td> 
          </tr>
        ))}
        <tr className='attach-file-wrapper'>
          <td colSpan="10" style={{fontSize: '10px'}}><div className='subattach-container'><div className="first-content"></div></div></td>
          {/* <td colSpan="7">
                <div className="arrow-icons">
                <span style={{borderRadius:'6px', background: 'white'}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M27 9H16.3337L12.8663 6.4C12.5196 6.14132 12.0988 6.00107 11.6663 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V11C29 10.4696 28.7893 9.96086 28.4142 9.58579C28.0391 9.21071 27.5304 9 27 9ZM5 8H11.6663L14.3337 10L11.6663 12H5V8ZM27 25H5V14H11.6663C12.0988 13.9989 12.5196 13.8587 12.8663 13.6L16.3337 11H27V25Z" fill="#64748B"/>
                        </svg>
               </span>
               <span style={{borderRadius:'6px', background: 'white', marginLeft: '7px'}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M27 9H16.3337L12.8663 6.4C12.5196 6.14132 12.0988 6.00107 11.6663 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V11C29 10.4696 28.7893 9.96086 28.4142 9.58579C28.0391 9.21071 27.5304 9 27 9ZM5 8H11.6663L14.3337 10L11.6663 12H5V8ZM27 25H5V14H11.6663C12.0988 13.9989 12.5196 13.8587 12.8663 13.6L16.3337 11H27V25Z" fill="#64748B"/>
                        </svg>
               </span>
               <span style={{borderRadius:'6px', background: 'white', marginLeft: '7px'}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M27 9H16.3337L12.8663 6.4C12.5196 6.14132 12.0988 6.00107 11.6663 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V11C29 10.4696 28.7893 9.96086 28.4142 9.58579C28.0391 9.21071 27.5304 9 27 9ZM5 8H11.6663L14.3337 10L11.6663 12H5V8ZM27 25H5V14H11.6663C12.0988 13.9989 12.5196 13.8587 12.8663 13.6L16.3337 11H27V25Z" fill="#64748B"/>
                        </svg>
               </span>
                <button className="attach-btn">Attach</button>
                </div>
          </td> */}
        </tr>
        <tr className='attach-file-wrapper'>
          <td colSpan="10" style={{fontSize: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate dolor nibh, vestibulum sodales sapien elementum lobortis. Sed quis pharetra ex. Cras eu vulputate lacus. Quisque in leo massa. Nulla et libero ex. Aliquam ante nisi, aliquet eu condimentum .  Cras eu vulputate lacus. Quisque in leo massa. Nulla et libero ex. Aliquam ante nisi, aliquet eu condimentum </td>
          <td colSpan="7">
                <div className="arrow-icons">
                <span style={{borderRadius:'6px', background: 'white'}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M27 9H16.3337L12.8663 6.4C12.5196 6.14132 12.0988 6.00107 11.6663 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V11C29 10.4696 28.7893 9.96086 28.4142 9.58579C28.0391 9.21071 27.5304 9 27 9ZM5 8H11.6663L14.3337 10L11.6663 12H5V8ZM27 25H5V14H11.6663C12.0988 13.9989 12.5196 13.8587 12.8663 13.6L16.3337 11H27V25Z" fill="#64748B"/>
                        </svg>
               </span>
               <span style={{borderRadius:'6px', background: 'white', marginLeft: '7px'}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M27 9H16.3337L12.8663 6.4C12.5196 6.14132 12.0988 6.00107 11.6663 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V11C29 10.4696 28.7893 9.96086 28.4142 9.58579C28.0391 9.21071 27.5304 9 27 9ZM5 8H11.6663L14.3337 10L11.6663 12H5V8ZM27 25H5V14H11.6663C12.0988 13.9989 12.5196 13.8587 12.8663 13.6L16.3337 11H27V25Z" fill="#64748B"/>
                        </svg>
               </span>
               <span style={{borderRadius:'6px', background: 'white', marginLeft: '7px'}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M27 9H16.3337L12.8663 6.4C12.5196 6.14132 12.0988 6.00107 11.6663 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V11C29 10.4696 28.7893 9.96086 28.4142 9.58579C28.0391 9.21071 27.5304 9 27 9ZM5 8H11.6663L14.3337 10L11.6663 12H5V8ZM27 25H5V14H11.6663C12.0988 13.9989 12.5196 13.8587 12.8663 13.6L16.3337 11H27V25Z" fill="#64748B"/>
                        </svg>
               </span>
                <button className="attach-btn">Attach</button>
                </div>
          </td>
        </tr>
      </tbody>
    </table>  
  );
};


function Gatepass() {

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/GatePass')
  }
  return (
    <div className="content">
      <div className="user-info">
        <div>
          <span className="user-name">In / OUT Gate Pass</span>
        </div>
        <div className="form-group has-search searchbar d-flex">
          <div>
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button className="w-50 btn-gatepass" onClick={handleClick}>New Gate Pass</button>
        </div>
      </div>
      <div className="card-container">
        <div className="gatepass-card-detail">
          <span className="status">Stock</span>
          <p className="order-status-no">100,000</p>
        </div>
        <div className="gatepass-card-detail second-card">
          <span className="status">Order Pending</span>
          <p className="order-status-no">90,000</p>
        </div>
        <div className="gatepass-card-detail third-card">
          <span className="status">Stock</span>
          <p className="order-status-no">30,000</p>
        </div>
        <div className="gatepass-card-detail fourth-card">
          <span className="status">Stock</span>
          <p className="order-status-no">10,000</p>
        </div>
      </div>
      <div className="container">
        <TableComponent />
      </div>
    </div>
  );
}

export default Gatepass;
