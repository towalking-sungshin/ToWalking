const db= require(__dirname + "/../models/index")
const tw_Trail = db.tw_Trail;
const user_Trail = db.user_Trail;
const tw_like = db.tw_like;


exports.updateLike = async (req,res)=>{
    try{
        console.log("버튼 클릭");
        user_id = req.params.user_id;
        tw_num = req.params.id;
        
        // tw_like 테이블에서 데이터가 이미 존재하는지 확인
        already = await tw_like.findOne({
            where: {
                tw_num: tw_num,
                user_id: user_id
            }
        });

        if (already) {
            console.log('이미 공감을 눌렀습니다.')
            // return res.redirect("/towalking/" + user_id + "/list");
            return res.render("../views/already_like_listPage");
        }

         else {
            await tw_like.create({ // 산책로 공감 테이블에 데이터 삽입
                id: 4,
                tw_num: tw_num,
                user_id: user_id
            });
            
            data = await tw_Trail.findByPk(tw_num); // 산책로 데이터 찾기

            update_like = data['like'] + 1; // 공감수 + 1
            console.log("업데이트 된 공감수: " + update_like);

            tw_Trail.update( // 공감수 업데이트
            { like: update_like },
            { where : { tw_num : tw_num } }).then(()=>{
                return res.redirect("/towalking/" + user_id + "/list");
            });
        }

    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};



