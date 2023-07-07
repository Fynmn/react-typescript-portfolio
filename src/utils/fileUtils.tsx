export function getHospiLinkFilenames(): string[] {
  const files = import.meta.glob(
    "../../public/assets/img/projects/hospilink/*"
  );
  const filenames: string[] = [];

  for (const path in files) {
    if (files.hasOwnProperty(path)) {
      const filename = path.replace(
        "../../public/assets/img/projects/hospilink/",
        "assets/img/projects/hospilink/"
      );
      filenames.push(filename);
    }
  }

  return filenames;
}

export function getPolliceFilenames(): string[] {
  const files = import.meta.glob("../../public/assets/img/projects/pollice/*");
  const filenames: string[] = [];

  for (const path in files) {
    if (files.hasOwnProperty(path)) {
      const filename = path.replace(
        "../../public/assets/img/projects/pollice/",
        "assets/img/projects/pollice/"
      );
      filenames.push(filename);
    }
  }

  return filenames;
}

export function getInteractiveDictFilenames(): string[] {
  const files = import.meta.glob(
    "../../public/assets/img/projects/interactive_dictionary/*"
  );
  const filenames: string[] = [];

  for (const path in files) {
    if (files.hasOwnProperty(path)) {
      const filename = path.replace(
        "../../public/assets/img/projects/interactive_dictionary/",
        "assets/img/projects/interactive_dictionary/"
      );
      filenames.push(filename);
    }
  }

  return filenames;
}

export function getBoooredFilenames(): string[] {
  const files = import.meta.glob("../../public/assets/img/projects/booored/*");
  const filenames: string[] = [];

  for (const path in files) {
    if (files.hasOwnProperty(path)) {
      const filename = path.replace(
        "../../public/assets/img/projects/booored/",
        "assets/img/projects/booored/"
      );
      filenames.push(filename);
    }
  }

  return filenames;
}
