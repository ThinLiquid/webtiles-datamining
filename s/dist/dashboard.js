/* 74b2e116c2c1bee422455f75337b4683d4ace2490545084403961457f9d7c585 */
((function () {
  const _0x0 = ["png", "jpg", "jpeg", "webp", "bmp"];
  let _0x1 = null,
    _0x2 = null,
    _0x3 = null,
    _0x4 = null,
    _0x5 = null,
    _0x6 = null,
    _0x7 = null;
  ((window.isImageFile = function (_0x8) {
    const _0x9 = _0x8.name.split(".").pop().toLowerCase();
    return _0x0.includes(_0x9);
  }),
    (window.showImageUploadModal = function (_0x8, _0x9 = null, _0xa = null) {
      ((_0x3 = _0x8), (_0x2 = _0x8), (_0x6 = _0x9), (_0x7 = _0xa));
      const _0xb = new FileReader();
      ((_0xb.onload = (_0xc) => {
        _0x1 = _0xc.target.result;
        const _0xd = new Image();
        ((_0xd.onload = () => {
          const _0xe = (_0x8.size / 1024).toFixed(2);
          document.getElementById("image-upload-original-info").innerHTML =
            `${_0xd.width} \xD7 ${_0xd.height}px<br>Size: ${_0xe} KB`;
        }),
          (_0xd.src = _0xc.target.result));
      }),
        _0xb.readAsDataURL(_0x8),
        (document.getElementById("image-upload-original").checked = !1),
        (document.getElementById("image-upload-config").style.display =
          "block"),
        (document.getElementById("image-upload-max-dimension").value = "512"),
        (document.getElementById("image-upload-quality").value = "80"),
        (document.getElementById("image-upload-quality-value").textContent =
          "80"),
        (document.getElementById("image-upload-format").value = "jpg"),
        document.querySelectorAll(".modal.active").forEach((_0xc) => {
          _0xc.id !== "image-upload-modal" && _0xc.classList.remove("active");
        }));
      const _0xf = document.getElementById("image-upload-modal"),
        _0x10 = _0xf.querySelector(".modal-content");
      (_0xf.classList.add("active"),
        _0x10 && (_0x10.scrollTop = 0),
        setTimeout(() => {
          _0x11();
        }, 100));
    }),
    (window.compressImage = function (_0x8, _0x9, _0xa, _0xb) {
      return new Promise((_0xf, _0x10) => {
        const _0xc = new FileReader();
        ((_0xc.onload = (_0xd) => {
          const _0xe = new Image();
          ((_0xe.onload = () => {
            let _0x12 = _0xe.width,
              _0x13 = _0xe.height;
            (_0x12 > _0x9 || _0x13 > _0x9) &&
              (_0x12 > _0x13
                ? ((_0x13 = (_0x13 / _0x12) * _0x9), (_0x12 = _0x9))
                : ((_0x12 = (_0x12 / _0x13) * _0x9), (_0x13 = _0x9)));
            const _0x14 = document.createElement("canvas");
            ((_0x14.width = _0x12),
              (_0x14.height = _0x13),
              _0x14.getContext("2d").drawImage(_0xe, 0, 0, _0x12, _0x13));
            let _0x15, _0x16;
            switch (_0xb) {
              case "png":
                ((_0x15 = "image/png"), (_0x16 = "png"));
                break;
              case "webp":
                ((_0x15 = "image/webp"), (_0x16 = "webp"));
                break;
              default:
                ((_0x15 = "image/jpeg"), (_0x16 = "jpg"));
                break;
            }
            _0x14.toBlob(
              (_0x17) => {
                if (!_0x17) {
                  _0x10(new Error("Failed to compress image"));
                  return;
                }
                const _0x18 = `${_0x8.name.split(".")[0]}.${_0x16}`,
                  _0x19 = new File([_0x17], _0x18, { type: _0x15 });
                _0xf(_0x19);
              },
              _0x15,
              _0xb === "png" ? void 0 : _0xa,
            );
          }),
            (_0xe.onerror = () => _0x10(new Error("Failed to load image"))),
            (_0xe.src = _0xd.target.result));
        }),
          (_0xc.onerror = () => _0x10(new Error("Failed to read file"))),
          _0xc.readAsDataURL(_0x8));
      });
    }));
  function _0x11() {
    !_0x1 ||
      !_0x2 ||
      (_0x4 && clearTimeout(_0x4),
      (_0x4 = setTimeout(() => {
        if (document.getElementById("image-upload-original").checked) return;
        const _0x9 = parseInt(
            document.getElementById("image-upload-max-dimension").value,
          ),
          _0xa =
            parseInt(document.getElementById("image-upload-quality").value) /
            100,
          _0xb = document.getElementById("image-upload-format").value,
          _0xf = new Image();
        ((_0xf.onload = () => {
          let _0x10 = _0xf.width,
            _0xc = _0xf.height;
          (_0x10 > _0x9 || _0xc > _0x9) &&
            (_0x10 > _0xc
              ? ((_0xc = (_0xc / _0x10) * _0x9), (_0x10 = _0x9))
              : ((_0x10 = (_0x10 / _0xc) * _0x9), (_0xc = _0x9)));
          const _0xd = document.createElement("canvas");
          ((_0xd.width = _0x10),
            (_0xd.height = _0xc),
            _0xd.getContext("2d").drawImage(_0xf, 0, 0, _0x10, _0xc));
          let _0x12;
          switch (_0xb) {
            case "png":
              _0x12 = "image/png";
              break;
            case "webp":
              _0x12 = "image/webp";
              break;
            default:
              _0x12 = "image/jpeg";
              break;
          }
          _0xd.toBlob(
            (_0x13) => {
              if (!_0x13) return;
              const _0x14 = (_0x13.size / 1024).toFixed(2),
                _0x1a = ((1 - _0x13.size / _0x2.size) * 100).toFixed(1);
              _0x5 && URL.revokeObjectURL(_0x5);
              const _0x15 = document.getElementById("image-upload-preview");
              ((_0x5 = URL.createObjectURL(_0x13)),
                (_0x15.src = _0x5),
                (document.getElementById("image-upload-info").innerHTML =
                  `Compressed: ${Math.round(_0x10)} \xD7 ${Math.round(_0xc)}px<br>Size: ${_0x14} KB (${_0x1a}% reduction)<br>Format: ${_0xb.toUpperCase()}`));
            },
            _0x12,
            _0xb === "png" ? void 0 : _0xa,
          );
        }),
          (_0xf.src = _0x1));
      }, 150)));
  }
  function _0x1b() {
    (document
      .getElementById("image-upload-original")
      .addEventListener("change", (_0x8) => {
        if (
          ((document.getElementById("image-upload-config").style.display = _0x8
            .target.checked
            ? "none"
            : "block"),
          _0x8.target.checked)
        ) {
          if (_0x1 && _0x2) {
            document.getElementById("image-upload-preview").src = _0x1;
            const _0x9 = (_0x2.size / 1024).toFixed(2),
              _0xa = new Image();
            ((_0xa.onload = () => {
              document.getElementById("image-upload-info").innerHTML =
                `Original: ${_0xa.width} \xD7 ${_0xa.height}px<br>Size: ${_0x9} KB<br>No compression`;
            }),
              (_0xa.src = _0x1));
          }
        } else _0x11();
      }),
      document
        .getElementById("image-upload-quality")
        .addEventListener("input", (_0x8) => {
          ((document.getElementById("image-upload-quality-value").textContent =
            _0x8.target.value),
            _0x11());
        }),
      document
        .getElementById("image-upload-max-dimension")
        .addEventListener("input", _0x11),
      document
        .getElementById("image-upload-format")
        .addEventListener("change", _0x11),
      document
        .getElementById("image-upload-confirm-btn")
        .addEventListener("click", () => {
          if (!_0x3) return;
          const _0x8 = document.getElementById("image-upload-original").checked,
            _0x9 = _0x3,
            _0xa = _0x6,
            _0xb = _0x7;
          if (
            (window.closeModal && window.closeModal("image-upload-modal"),
            (_0x3 = null),
            (_0x6 = null),
            (_0x7 = null),
            _0x8)
          )
            window.uploadFileDirect &&
              window
                .uploadFileDirect(_0x9)
                .then(() => {
                  _0xa ? _0xa() : location.reload();
                })
                .catch((_0xf) => {
                  _0xb
                    ? _0xb()
                    : alert("Error uploading file: " + _0xf.message);
                });
          else {
            const _0xf = parseInt(
                document.getElementById("image-upload-max-dimension").value,
              ),
              _0x10 =
                parseInt(
                  document.getElementById("image-upload-quality").value,
                ) / 100,
              _0xc = document.getElementById("image-upload-format").value;
            compressImage(_0x9, _0xf, _0x10, _0xc)
              .then((_0xd) => {
                window.uploadFileDirect &&
                  window
                    .uploadFileDirect(_0xd)
                    .then(() => {
                      _0xa ? _0xa() : location.reload();
                    })
                    .catch((_0xe) => {
                      _0xb
                        ? _0xb()
                        : alert("Error uploading file: " + _0xe.message);
                    });
              })
              .catch((_0xd) => {
                _0xb
                  ? _0xb()
                  : alert("Error compressing image: " + _0xd.message);
              });
          }
        }));
  }
  const _0x1c = window.closeModal;
  ((window.closeModal = function (_0x8) {
    (_0x1c
      ? _0x1c(_0x8)
      : document.getElementById(_0x8).classList.remove("active"),
      _0x8 === "image-upload-modal" &&
        _0x5 &&
        (URL.revokeObjectURL(_0x5), (_0x5 = null)));
  }),
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", _0x1b)
      : _0x1b());
})(),
  (function () {
    let _0x0 = null,
      _0x1 = null,
      _0x2 = null,
      _0x3 = !1,
      _0x4 = null,
      _0x5 = null;
    ((window.initDashboard = function (_0xa) {
      ((_0x0 = _0xa.domain),
        (_0x1 = _0xa.path),
        (_0x2 = null),
        (_0x3 = !1),
        _0x6());
    }),
      (window.isGifFile = function (_0xa) {
        return _0xa.name.split(".").pop().toLowerCase() === "gif";
      }),
      (window.isVideoFile = function (_0xa) {
        const _0xb = _0xa.name.split(".").pop().toLowerCase();
        return ["mp4", "webm"].includes(_0xb);
      }),
      (window.isAudioFile = function (_0xa) {
        const _0xb = _0xa.name.split(".").pop().toLowerCase();
        return ["mp3", "ogg", "wav"].includes(_0xb);
      }),
      (window.isFontFile = function (_0xa) {
        const _0xb = _0xa.name.split(".").pop().toLowerCase();
        return ["ttf", "woff", "woff2", "otf"].includes(_0xb);
      }),
      (window.showCompressionWarning = function (_0xa) {
        const _0xb = (_0xa.size / 1048576).toFixed(2);
        let _0xf = "",
          _0x10 = "";
        (window.isGifFile(_0xa)
          ? ((_0xf = `The GIF file "${_0xa.name}" is ${_0xb} MB, which exceeds the maximum file size limit of 1 MB for this file type. Please compress it before uploading.`),
            (_0x10 = `
                <a href="https://ezgif.com/optimize" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">Ezgif GIF Optimizer</a>
                <a href="https://ezgif.com/resize" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">Ezgif GIF Resizer</a>
            `))
          : window.isVideoFile(_0xa)
            ? ((_0xf = `The video file "${_0xa.name}" is ${_0xb} MB, which exceeds the maximum file size limit of 3 MB for this file type. Please compress it before uploading.`),
              (_0x10 = `
                <a href="https://ezgif.com/video-compressor" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">Ezgif Video Compressor</a>
                <a href="https://ezgif.com/resize-video" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">Ezgif Video Resizer</a>
            `))
            : window.isAudioFile(_0xa)
              ? ((_0xf = `The audio file "${_0xa.name}" is ${_0xb} MB, which exceeds the maximum file size limit of 3 MB for this file type. Please compress it before uploading.`),
                (_0x10 = `
                <a href="https://www.onlineconverter.com/mp3" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">OnlineConverter.com Audio to MP3 Converter</a>
                <a href="https://www.onlineconverter.com/compress-mp3" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">OnlineConverter.com MP3 Compressor</a>
            `))
              : window.isFontFile(_0xa) &&
                ((_0xf = `The font file "${_0xa.name}" is ${_0xb} MB, which exceeds the maximum file size limit of 1 MB for this file type. Please compress it before uploading.`),
                (_0x10 = `
                <a href="https://www.youcompress.com/ttf/" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">YouCompress TTF Compressor</a>
                <a href="https://fontforge.org/en-US/" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">FontForge</a>
            `)),
          (document.getElementById("compression-warning-message").textContent =
            _0xf),
          (document.getElementById("compression-links").innerHTML = _0x10),
          document.querySelectorAll(".modal.active").forEach((_0xc) => {
            _0xc.id !== "compression-warning-modal" &&
              _0xc.classList.remove("active");
          }),
          document
            .getElementById("compression-warning-modal")
            .classList.add("active"));
      }),
      (window.uploadFileDirect = function (_0xa) {
        return new Promise((_0xb, _0xf) => {
          const _0x10 = new FormData();
          (_0x10.append("file", _0xa),
            _0x10.append(
              "path",
              _0x1 === "/" ? _0xa.name : _0x1 + "/" + _0xa.name,
            ),
            fetch(`/api/files/upload?domain=${_0x0}`, {
              method: "POST",
              body: _0x10,
            })
              .then((_0xc) => _0xc.json())
              .then((_0xc) => {
                _0xc.success ? _0xb() : _0xf(new Error(_0xc.error));
              })
              .catch((_0xc) => {
                _0xf(_0xc);
              }));
        });
      }),
      (window.uploadMultipleFiles = function (_0xa) {
        const _0xb = [],
          _0xf = [];
        let _0x10 = !1,
          _0xc = null;
        if (
          (_0xa.forEach((_0x15) => {
            if (
              window.isGifFile(_0x15) ||
              window.isVideoFile(_0x15) ||
              window.isAudioFile(_0x15) ||
              window.isFontFile(_0x15)
            ) {
              const _0x16 =
                window.isGifFile(_0x15) || window.isFontFile(_0x15)
                  ? 1048576
                  : 3145728;
              _0x15.size > _0x16 && ((_0x10 = !0), (_0xc = _0x15));
            }
          }),
          _0x10 && _0xc)
        ) {
          window.showCompressionWarning && window.showCompressionWarning(_0xc);
          return;
        }
        _0xa.forEach((_0x15) => {
          window.isImageFile && window.isImageFile(_0x15)
            ? _0xb.push(_0x15)
            : _0xf.push(_0x15);
        });
        let _0xd = 0,
          _0xe = 0;
        const _0x12 = _0xa.length;
        _0xf.forEach((_0x15) => {
          uploadFileDirect(_0x15)
            .then(() => {
              (_0xd++, _0x1a());
            })
            .catch(() => {
              (_0xe++, _0x1a());
            });
        });
        let _0x13 = 0;
        function _0x14() {
          if (_0x13 >= _0xb.length) {
            _0x1a();
            return;
          }
          const _0x15 = _0xb[_0x13];
          (_0x13++,
            window.showImageUploadModal &&
              window.showImageUploadModal(
                _0x15,
                () => {
                  (_0xd++, _0x14());
                },
                () => {
                  (_0xe++, _0x14());
                },
              ));
        }
        function _0x1a() {
          _0xd + _0xe === _0x12 &&
            _0x13 >= _0xb.length &&
            (_0xe > 0 && alert(`Uploaded ${_0xd} file(s), ${_0xe} error(s)`),
            _0xd > 0 && location.reload());
        }
        _0xb.length > 0 ? _0x14() : _0xf.length === 0 && _0x1a();
      }));
    function _0x6() {
      (document.getElementById("upload-btn").addEventListener("click", () => {
        document.getElementById("file-upload-input-hidden").click();
      }),
        document
          .getElementById("file-upload-input-hidden")
          .addEventListener("change", (_0xb) => {
            if (_0xb.target.files.length > 0) {
              const _0xf = _0xb.target.files[0];
              if (
                (window.isGifFile(_0xf) ||
                  window.isVideoFile(_0xf) ||
                  window.isAudioFile(_0xf) ||
                  window.isFontFile(_0xf)) &&
                _0xf.size >
                  (window.isGifFile(_0xf) || window.isFontFile(_0xf)
                    ? 1024 * 1024
                    : 1024 * 1024 * 3)
              ) {
                (window.showCompressionWarning &&
                  window.showCompressionWarning(_0xf),
                  (_0xb.target.value = ""));
                return;
              }
              window.isImageFile && window.isImageFile(_0xf)
                ? window.showImageUploadModal &&
                  window.showImageUploadModal(_0xf)
                : uploadFileDirect(_0xf)
                    .then(() => {
                      location.reload();
                    })
                    .catch((_0x10) => {
                      alert("Error uploading file: " + _0x10.message);
                    });
            }
            _0xb.target.value = "";
          }),
        document
          .getElementById("new-file-btn")
          .addEventListener("click", () => {
            ((document.getElementById("new-file-name").value = ""),
              document.getElementById("new-file-modal").classList.add("active"),
              setTimeout(() => {
                document.getElementById("new-file-name").focus();
              }, 100));
          }),
        document
          .getElementById("new-file-name")
          .addEventListener("keypress", (_0xb) => {
            _0xb.key === "Enter" && _0x7();
          }),
        document.getElementById("new-dir-btn").addEventListener("click", () => {
          ((document.getElementById("new-dir-name").value = ""),
            document.getElementById("new-dir-modal").classList.add("active"),
            setTimeout(() => {
              document.getElementById("new-dir-name").focus();
            }, 100));
        }),
        document
          .getElementById("new-dir-name")
          .addEventListener("keypress", (_0xb) => {
            _0xb.key === "Enter" && _0x11();
          }),
        document
          .getElementById("rename-name")
          .addEventListener("keypress", (_0xb) => {
            _0xb.key === "Enter" && _0x1c();
          }),
        document.querySelectorAll(".file-item").forEach((_0xb) => {
          _0xb.addEventListener("click", (_0xf) => {
            if (_0xf.target.closest(".file-actions")) return;
            const _0x10 = _0xb.dataset.name,
              _0xc = _0xb.dataset.type,
              _0xd = _0xb.dataset.path;
            if (_0xc === "directory")
              window.location.href = `/dashboard?site=${encodeURIComponent(_0x0)}&path=${encodeURIComponent(_0xd)}`;
            else {
              const _0xe = _0x10.split(".").pop().toLowerCase();
              [
                "html",
                "css",
                "js",
                "txt",
                "json",
                "md",
                "xml",
                "yaml",
                "yml",
              ].includes(_0xe)
                ? (window.location.href = `/editor?site=${encodeURIComponent(_0x0)}&path=${encodeURIComponent(_0xd)}`)
                : (window.location.href = `/t/${_0x0}/${_0xd}`);
            }
          });
        }),
        document.querySelectorAll(".btn-rename").forEach((_0xb) => {
          _0xb.addEventListener("click", (_0xf) => {
            _0xf.stopPropagation();
            const _0x10 = _0xb.dataset.name,
              _0xc = _0xb.dataset.isDir === "true";
            _0x1b(_0x10, _0xc);
          });
        }),
        document.querySelectorAll(".btn-delete").forEach((_0xb) => {
          _0xb.addEventListener("click", (_0xf) => {
            _0xf.stopPropagation();
            const _0x10 = _0xb.dataset.name,
              _0xc = _0xb.dataset.isDir === "true";
            _0x8(_0x10, _0xc);
          });
        }),
        document.querySelectorAll(".modal").forEach((_0xb) => {
          _0xb.addEventListener("click", (_0xf) => {
            _0xf.target === _0xb && _0xb.classList.remove("active");
          });
        }),
        document.addEventListener("keydown", (_0xb) => {
          _0xb.key === "Escape" &&
            document.querySelectorAll(".modal.active").forEach((_0xf) => {
              _0xf.classList.remove("active");
            });
        }));
      const _0xa = document.getElementById("file-list");
      (_0xa.addEventListener("dragover", (_0xb) => {
        (_0xb.preventDefault(),
          _0xb.stopPropagation(),
          _0xb.dataTransfer.types.includes("Files") &&
            (_0xa.classList.add("drag-over"),
            (document.getElementById("drop-indicator").style.display =
              "block")));
      }),
        _0xa.addEventListener("dragleave", (_0xb) => {
          (_0xb.preventDefault(),
            _0xb.stopPropagation(),
            _0xa.contains(_0xb.relatedTarget) ||
              (_0xa.classList.remove("drag-over"),
              (document.getElementById("drop-indicator").style.display =
                "none")));
        }),
        _0xa.addEventListener("drop", (_0xb) => {
          if (
            (_0xb.preventDefault(),
            _0xb.stopPropagation(),
            _0xa.classList.remove("drag-over"),
            (document.getElementById("drop-indicator").style.display = "none"),
            _0xb.dataTransfer.files && _0xb.dataTransfer.files.length > 0)
          ) {
            const _0xf = Array.from(_0xb.dataTransfer.files);
            uploadMultipleFiles(_0xf);
            return;
          }
          if (_0x4 && _0x5) {
            const _0xf = _0x4.dataset.path,
              _0x10 = _0x5.dataset.path;
            if (_0x5.dataset.type === "directory" && _0xf !== _0x10) {
              const _0xd = _0x4.dataset.name,
                _0xe = _0x10 === "/" ? _0x10 + _0xd : _0x10 + "/" + _0xd;
              _0x9(_0xf, _0xe);
            }
            ((_0x4 = null),
              (_0x5 = null),
              document.querySelectorAll(".file-item").forEach((_0xd) => {
                _0xd.classList.remove("drag-over-target");
              }));
          }
        }),
        document
          .querySelectorAll('.file-item[draggable="true"]')
          .forEach((_0xb) => {
            (_0xb.addEventListener("dragstart", (_0xf) => {
              ((_0x4 = _0xb),
                (_0xf.dataTransfer.effectAllowed = "move"),
                _0xf.dataTransfer.setData("text/plain", _0xb.dataset.path),
                _0xb.classList.add("dragging"));
            }),
              _0xb.addEventListener("dragend", (_0xf) => {
                (_0xb.classList.remove("dragging"),
                  _0x5 && _0x5.classList.remove("drag-over-target"),
                  (_0x4 = null),
                  (_0x5 = null));
              }));
          }),
        document.querySelectorAll(".file-item.directory").forEach((_0xb) => {
          (_0xb.addEventListener("dragover", (_0xf) => {
            _0x4 &&
              _0x4 !== _0xb &&
              (_0xf.preventDefault(),
              _0xf.stopPropagation(),
              (_0x5 = _0xb),
              document.querySelectorAll(".file-item").forEach((_0x10) => {
                _0x10.classList.remove("drag-over-target");
              }),
              _0xb.classList.add("drag-over-target"));
          }),
            _0xb.addEventListener("dragleave", (_0xf) => {
              _0xb.contains(_0xf.relatedTarget) ||
                (_0xb.classList.remove("drag-over-target"),
                _0x5 === _0xb && (_0x5 = null));
            }));
        }));
    }
    function _0x7() {
      const _0xa = document.getElementById("new-file-name").value.trim();
      if (!_0xa) {
        alert("Please enter a file name");
        return;
      }
      const _0xb = _0x1 === "/" ? _0xa : _0x1 + "/" + _0xa;
      window.location.href = `/editor?site=${encodeURIComponent(_0x0)}&path=${encodeURIComponent(_0xb)}`;
    }
    function _0x11() {
      const _0xa = document.getElementById("new-dir-name").value.trim();
      if (!_0xa) {
        alert("Please enter a directory name");
        return;
      }
      const _0xb = _0x1 === "/" ? _0xa : _0x1 + "/" + _0xa;
      fetch(`/api/files/create-directory?domain=${_0x0}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: _0xb }),
      })
        .then((_0xf) => _0xf.json())
        .then((_0xf) => {
          _0xf.success ? location.reload() : alert("Error: " + _0xf.error);
        })
        .catch((_0xf) => {
          alert("Error creating directory: " + _0xf.message);
        });
    }
    function _0x1b(_0xa, _0xb) {
      ((_0x2 = _0xa),
        (_0x3 = _0xb),
        (document.getElementById("rename-name").value = _0xa),
        document.getElementById("rename-modal").classList.add("active"),
        setTimeout(() => {
          (document.getElementById("rename-name").focus(),
            document.getElementById("rename-name").select());
        }, 100));
    }
    function _0x1c() {
      const _0xa = document.getElementById("rename-name").value.trim();
      if (!_0xa) {
        alert("Please enter a new name");
        return;
      }
      const _0xb = _0x1 === "/" ? _0x2 : _0x1 + "/" + _0x2,
        _0xf = _0x1 === "/" ? _0xa : _0x1 + "/" + _0xa;
      fetch(`/api/files/move?domain=${_0x0}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: _0xb,
          to: _0xf,
        }),
      })
        .then((_0x10) => _0x10.json())
        .then((_0x10) => {
          _0x10.success
            ? (document.querySelectorAll(".file-item").forEach((_0xd) => {
                if (
                  _0xd.dataset.name === _0x2 &&
                  (_0xd.dataset.type === "directory") === _0x3
                ) {
                  const _0xe = _0xd.querySelector(".file-name span:last-child");
                  (_0xe && (_0xe.textContent = _0xa),
                    (_0xd.dataset.name = _0xa),
                    (_0xd.dataset.path = _0xf));
                  const _0x12 = _0xd.querySelector(".btn-rename"),
                    _0x13 = _0xd.querySelector(".btn-delete");
                  (_0x12 && (_0x12.dataset.name = _0xa),
                    _0x13 && (_0x13.dataset.name = _0xa));
                  const _0x14 = _0xd.querySelector(".file-icon");
                  if (_0x14) {
                    const _0x1a = _0x14.querySelector("img");
                    _0x1a &&
                      ((_0x1a.src = `/t/${_0x0}/${_0xf}`), (_0x1a.alt = _0xa));
                  }
                }
              }),
              closeModal("rename-modal"))
            : alert("Error: " + _0x10.error);
        })
        .catch((_0x10) => {
          alert("Error renaming: " + _0x10.message);
        });
    }
    function _0x8(_0xa, _0xb) {
      if (!confirm(`Are you sure you want to delete "${_0xa}"?`)) return;
      const _0xf = _0x1 === "/" ? _0xa : _0x1 + "/" + _0xa;
      fetch(`/api/files/delete?domain=${_0x0}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: _0xf }),
      })
        .then((_0x10) => _0x10.json())
        .then((_0x10) => {
          if (_0x10.success) {
            document.querySelectorAll(".file-item").forEach((_0x12) => {
              _0x12.dataset.name === _0xa &&
                (_0x12.dataset.type === "directory") === _0xb &&
                _0x12.remove();
            });
            const _0xd = document.getElementById("file-list");
            if (
              Array.from(_0xd.querySelectorAll(".file-item")).filter(
                (_0x12) => _0x12.dataset.name !== "..",
              ).length === 0 &&
              !_0xd.querySelector(".file-item:not([data-name])")
            ) {
              const _0x13 = document.createElement("div");
              ((_0x13.className = "file-item"),
                (_0x13.style.cursor = "default"),
                (_0x13.innerHTML =
                  '<div class="file-name">No files or directories</div>'),
                _0xd.appendChild(_0x13));
            }
          } else alert("Error: " + _0x10.error);
        })
        .catch((_0x10) => {
          alert("Error deleting: " + _0x10.message);
        });
    }
    function _0x9(_0xa, _0xb) {
      fetch(`/api/files/move?domain=${_0x0}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: _0xa,
          to: _0xb,
        }),
      })
        .then((_0xf) => _0xf.json())
        .then((_0xf) => {
          if (_0xf.success) {
            document.querySelectorAll(".file-item").forEach((_0xe) => {
              _0xe.dataset.path === _0xa && _0xe.remove();
            });
            const _0xc = document.getElementById("file-list");
            if (
              Array.from(_0xc.querySelectorAll(".file-item")).filter(
                (_0xe) => _0xe.dataset.name !== "..",
              ).length === 0 &&
              !_0xc.querySelector(".file-item:not([data-name])")
            ) {
              const _0x12 = document.createElement("div");
              ((_0x12.className = "file-item"),
                (_0x12.style.cursor = "default"),
                (_0x12.innerHTML =
                  '<div class="file-name">No files or directories</div>'),
                _0xc.appendChild(_0x12));
            }
          } else alert("Error moving file: " + _0xf.error);
        })
        .catch((_0xf) => {
          alert("Error moving file: " + _0xf.message);
        });
    }
    ((window.createNewFile = _0x7),
      (window.createNewDirectory = _0x11),
      (window.renameItem = _0x1b),
      (window.confirmRename = _0x1c),
      (window.deleteItem = _0x8),
      (window.moveFile = _0x9),
      window.closeModal ||
        (window.closeModal = function (_0xa) {
          document.getElementById(_0xa).classList.remove("active");
        }));
  })());
