const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../public'))
  },
  filename: (req, file, cb) => {
    cb(null, uuid) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.status(200).json({
    data: {
      file: uuid,
    },
  });
});

module.exports = router;