import html2canvas from "html2canvas";

export default function ScreenshotButton({ title }: { title: string }) {
    let download: HTMLAnchorElement;
    return (
        <div>
            <a onClick={() =>
                html2canvas(document.getElementById("content")!, {
                    backgroundColor: "black",
                    windowWidth: 1440,
                    scale: 2,
                }).then((canvas) => {
                    const date = new Date().toISOString()
                        .replace(/\....Z$/, "").replace("T", " ");
                    download.setAttribute("download", `${title} ${date}.png`);
                    download.setAttribute("href", canvas
                        .toDataURL("image/png")
                        .replace("image/png", "image/octet-stream"));
                    download.click();
                })}>Take a Screenshot</a>
            <a ref={x => download = x!} style="width:0;height:0" />
        </div>
    );
}
