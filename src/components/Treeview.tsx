export default function Treeview() {

  return (<>
    <div
      className="accordion-treeview-root"
      role="tree"
      aria-orientation="vertical"
    >
      <div className="accordion" role="group" data-accordion-always-open>
        <div
          className="accordion-item active"
          role="treeitem"
          aria-expanded="true"
          id="basic-tree-heading-one"
        >
          <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
            <button
              className="accordion-toggle btn btn-sm btn-circle btn-text"
              aria-label="Expand Button"
              aria-expanded="true"
              aria-controls="basic-tree-collapse-one"
            >
              <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
            </button>
            <div className="accordion-selectable accordion-selected:bg-base-200/60 grow cursor-pointer rounded-md px-1.5">
              <div className="flex items-center gap-x-3">
                <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                <div className="grow">
                  <span className="text-base-content/90">assets</span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="basic-tree-collapse-one"
            className="accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="basic-tree-heading-one"
            role="group"
          >
            <div
              className="tree-view-space"
              role="group"
              data-accordion-always-open
            >
              <div
                className="accordion-item active"
                role="treeitem"
                aria-expanded="true"
                id="basic-tree-sub-heading-one"
              >
                <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                  <button
                    className="accordion-toggle btn btn-sm btn-circle btn-text"
                    aria-label="Expand Button"
                    aria-controls="basic-tree-sub-collapse-one"
                    aria-expanded="true"
                  >
                    <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
                  </button>
                  <div className="accordion-selectable accordion-selected:bg-base-200/90 grow cursor-pointer rounded-md px-1.5">
                    <div className="flex items-center gap-x-3">
                      <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                      <div className="grow">
                        <span className="text-base-content/90">css</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="basic-tree-sub-collapse-one"
                  className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="basic-tree-sub-heading-one"
                  role="group"
                >
                  <div
                    className="tree-view-space"
                    role="group"
                    data-accordion-always-open
                  >
                    <div
                      className="accordion-item active"
                      role="treeitem"
                      aria-expanded="true"
                      id="basic-tree-sub-level-two-heading-one"
                    >
                      <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                        <button
                          className="accordion-toggle btn btn-sm btn-circle btn-text"
                          aria-label="Expand Button"
                          aria-expanded="true"
                          aria-controls="basic-tree-sub-level-two-collapse-one"
                        >
                          <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
                        </button>
                        <div className="accordion-selectable accordion-selected:bg-base-200/90 grow cursor-pointer rounded-md px-1.5">
                          <div className="flex items-center gap-x-3">
                            <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                            <div className="grow">
                              <span className="text-base-content/90">
                                main
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="basic-tree-sub-level-two-collapse-one"
                        className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="basic-tree-sub-level-two-heading-one"
                        role="group"
                      >
                        <div className="tree-view-space">
                          <div
                            className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                              <div className="grow">
                                <span className="text-base-content/90">
                                  main.css
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                              <div className="grow">
                                <span className="text-base-content/90">
                                  docs.css
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="px-2">
                            <span className="text-base-content/90">
                              README.txt
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item"
                      role="treeitem"
                      aria-expanded="false"
                      id="basic-tree-sub-level-two-heading-two"
                    >
                      <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                        <button
                          className="accordion-toggle btn btn-sm btn-circle btn-text"
                          aria-label="Expand Button"
                          aria-controls="basic-tree-sub-level-two-collapse-two"
                          aria-expanded="false"
                        >
                          <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
                        </button>
                        <div className="accordion-selectable accordion-selected:bg-base-200/90 grow cursor-pointer rounded-md px-1.5">
                          <div className="flex items-center gap-x-3">
                            <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                            <div className="grow">
                              <span className="text-base-content/90">
                                tailwind
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="basic-tree-sub-level-two-collapse-two"
                        className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="basic-tree-sub-level-two-heading-two"
                        role="group"
                      >
                        <div className="tree-view-space">
                          <div
                            className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                              <div className="grow">
                                <span className="text-base-content/90">
                                  input.css
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item"
                      role="treeitem"
                      aria-expanded="false"
                      id="basic-tree-sub-level-two-heading-three"
                    >
                      <div className="px-1.5 py-0.5" role="treeitem">
                        <span className="text-base-content/90">
                          .gitignore
                        </span>
                      </div>
                      <div
                        id="basic-tree-sub-level-two-collapse-three"
                        className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="basic-tree-sub-level-two-heading-three"
                        aria-expanded="false"
                        role="group"
                      >
                        <div className="tree-view-space">
                          <div
                            className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                              <div className="grow">
                                <span className="text-base-content/90">
                                  algolia.css
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="basic-tree-sub-heading-two">
                <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                  <button
                    className="accordion-toggle btn btn-sm btn-circle btn-text"
                    aria-label="Expand Button"
                    aria-controls="basic-tree-sub-collapse-two"
                    aria-expanded="false"
                  >
                    <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
                  </button>{" "}
                  <div className="accordion-selectable accordion-selected:bg-base-200/90 grow cursor-pointer rounded-md px-1.5">
                    <div className="flex items-center gap-x-3">
                      <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                      <div className="grow">
                        <span className="text-base-content/90">img</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="basic-tree-sub-collapse-two"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="basic-tree-sub-heading-two"
                  role="group"
                >
                  <div className="tree-view-space">
                    <div
                      className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="icon-[tabler--photo] text-base-content/90 size-4 flex-shrink-0"></span>
                        <div className="grow">
                          <span className="text-base-content/90">
                            hero.jpg
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="icon-[tabler--photo] text-base-content/90 size-4 flex-shrink-0"></span>
                        <div className="grow">
                          <span className="text-base-content/90">
                            tailwind.png
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="icon-[tabler--photo] text-base-content/90 size-4 flex-shrink-0"></span>
                        <div className="grow">
                          <span className="text-base-content/90">
                            untitled.png
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                role="treeitem"
                aria-expanded="false"
                id="basic-tree-sub-heading-three"
              >
                <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                  <button
                    className="accordion-toggle btn btn-sm btn-circle btn-text"
                    aria-label="Expand Button"
                    aria-expanded="false"
                    aria-controls="basic-tree-sub-collapse-three"
                  >
                    <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
                  </button>
                  <div className="accordion-selectable accordion-selected:bg-base-200/90 grow cursor-pointer rounded-md px-1.5">
                    <div className="flex items-center gap-x-3">
                      <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                      <div className="grow">
                        <span className="text-base-content/90">js</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="basic-tree-sub-collapse-three"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="basic-tree-sub-heading-three"
                  role="group"
                >
                  <div className="tree-view-space">
                    <div
                      className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <span className="icon-[tabler--photo] text-base-content/90 size-4 flex-shrink-0"></span>
                        <div className="grow">
                          <span className="text-base-content/90">
                            flyonui.js
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          role="treeitem"
          aria-expanded="false"
          id="basic-tree-heading-two"
        >
          <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
            <button
              className="accordion-toggle btn btn-sm btn-circle btn-text"
              aria-label="Expand Button"
              aria-controls="basic-tree-collapse-two"
              aria-expanded="false"
            >
              <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
            </button>
            <div className="accordion-selectable accordion-selected:bg-base-200/90 grow cursor-pointer rounded-md px-1.5">
              <div className="flex items-center gap-x-3">
                <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                <div className="grow">
                  <span className="text-base-content/90">scripts</span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="basic-tree-collapse-two"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="basic-tree-heading-two"
            role="group"
          >
            <div className="tree-view-space">
              <div
                className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                  <div className="grow">
                    <span className="text-base-content/90">flyonui.js</span>
                  </div>
                </div>
              </div>
              <div
                className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                  <div className="grow">
                    <span className="text-base-content/90">tailwind.js</span>
                  </div>
                </div>
              </div>
              <div
                className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                  <div className="grow">
                    <span className="text-base-content/90">www.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          role="treeitem"
          aria-expanded="false"
          id="basic-tree-heading-three"
        >
          <div className="accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
            <button
              className="accordion-toggle btn btn-sm btn-circle btn-text"
              aria-label="Expand Button"
              aria-controls="basic-tree-collapse-three"
              aria-expanded="false"
            >
              <span className="icon-[tabler--plus] text-base-content/80 accordion-item-active:rotate-45 size-4 transition-all duration-300"></span>
            </button>
            <div className="accordion-selectable accordion-selected:bg-base-200/90 grow cursor-pointer rounded-md px-1.5">
              <div className="flex items-center gap-x-3">
                <span className="icon-[tabler--folder] text-base-content/90 size-4 flex-shrink-0"></span>
                <div className="grow">
                  <span className="text-base-content/90">templates</span>
                </div>
              </div>
            </div>
          </div>
          <div
            id="basic-tree-collapse-three"
            className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="basic-tree-heading-three"
            role="group"
          >
            <div className="tree-view-space">
              <div
                className="accordion-selectable accordion-selected:bg-base-200/90 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <span className="icon-[tabler--file] text-base-content/90 size-4 flex-shrink-0"></span>
                  <div className="grow">
                    <span className="text-base-content/90">index.html</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
