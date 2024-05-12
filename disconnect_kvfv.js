fb.events.kviewer.record.mapped.push(function (state) {
  console.group("now kViewer record is mapped");
  console.log(state.record.__kViewerViewCode__);
  console.log(state.record.__kViewerSubdomain__);
  delete state.record.__kViewerViewCode__;
  delete state.record.__kViewerSubdomain__;
  console.log("disconeected kViewer record from state");
  console.groupEnd();
  return state;
});
