import html2canvas from "html2canvas";

export default function ScreenshotButton({ title }: { title: string }) {
    let download: HTMLAnchorElement;
    return (
        <div>
            <a onClick={async () => {
                const content = document.getElementById("content")!;
                content.style.width = "1440px";
                const canvas = await html2canvas(content, {
                    backgroundColor: "black",
                    windowWidth: 1440,
                    scrollX: 0,
                    scrollY: 0,
                    scale: window.orientation !== undefined ? 1 : 2,
                });
                content.style.width = "";
                const date = new Date().toISOString()
                    .replace(/\....Z$/, "").replace("T", " ");
                download.setAttribute("download", `${title} ${date}.png`);
                download.setAttribute("href", canvas
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream"));
                // TODO: consider if it's empty to alert instead
                download.click();
            }}>Take a Screenshot</a>
            <a ref={x => download = x!} style="width:0;height:0" />
        </div>
    );
}
