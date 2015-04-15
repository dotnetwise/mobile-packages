var newVersionAvailable = new ReactiveVar(0);
var hasResumed = new ReactiveVar(false);


document.addEventListener("resume", function () {
  hasResumed(true);
}, false);

Reload._onMigrate('onresume', onMigrate);
function onMigrate(retry) {
	console.log("hot-code-push downloaded", newVersionAvailable.get());
  newVersionAvailable.set(newVersionAvailable.get() + 1);
  //Reload._onMigrate(onMigrate);
  if (hasResumed.get()) {
    return Reload._onResume ? Reload._onResume() : [true, {}];
  } else {
    document.addEventListener("resume", retry, false);
    return [false];
  }
}

/**
 * @summary Reactive function that returns true when there is a new version of
 * the app downloaded, can be used to prompt the user to close and reopen the
 * app to get the new version.
 */
Reload.hasResumed = function () {
  return hasResumed.get();
};
Reload.hasResumed = function () {
  return newVersionAvailable.get();
};
