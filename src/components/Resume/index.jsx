import styles from "./rersume.module.scss";

export const Resume = () => {
  const filePath = process.env.PUBLIC_URL + "/resume/Seletska_Kira.pdf";

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "Seletska_Kira.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const openResumeInNewWindow = () => {
    window.open(filePath, "_blank");
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.download} onClick={handleDownload}>
          <span> Download resume PDF</span>
        </button>
      </div>
      <div>
        <button className={styles.view} onClick={openResumeInNewWindow}>
          <span>View resume online</span>
        </button>
      </div>
    </div>
  );
};
