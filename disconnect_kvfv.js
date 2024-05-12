function disconnect_kvfv() {
  const func = () => {
    if (!state.record.__kViewerViewCode__) {
      return state;
    }
    console.group("now kViewer record is mapped");
    console.log(state.record.__kViewerViewCode__);
    console.log(state.record.__kViewerSubdomain__);
    delete state.record.__kViewerViewCode__;
    delete state.record.__kViewerSubdomain__;
    console.log("disconeected kViewer from formbridge");
    console.groupEnd();
    return state;
  };
  fb.events.kviewer.record.mapped.push(func);
  fb.events.form.confirm.push(func);
}

document.addEventListener("DOMContentLoaded", function (event) {
  // urlのparamにdisconnect_kvfv=trueがある場合のみdisconnect_kvfvを実行
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("disconnect_kvfv") === "true") {
    console.log("disconnect_kvfv is set to true.");
    disconnect_kvfv();
  }
});
