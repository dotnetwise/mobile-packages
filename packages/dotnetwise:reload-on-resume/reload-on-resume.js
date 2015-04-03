var newVersionAvailable = new ReactiveVar(0);

var hasResumed = false;
document.addEventListener("resume", function () {
  hasResumed = true;
}, false);

Reload._onMigrate(function (retry) {
  newVersionAvailable.set(newVersionAvailable.get() + 1);

  if (hasResumed) {
    return [true, {}];
  } else {
    document.addEventListener("resume", retry, false);
    return [false];
  }
});

/**
 * @summary Reactive function that returns true when there is a new version of
 * the app downloaded, can be used to prompt the user to close and reopen the
 * app to get the new version.
 */
Reload.isWaitingForResume = function () {
  return newVersionAvailable.get();
};