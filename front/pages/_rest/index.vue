<template>
  <div>
    <section class="under_header">
      <div class="pic_under_header"><img class="image_under_header"
                                         src="https://dist.reyhoon-static.com/uploads/images/restaurants/misc/shila_8_1543741017.jpeg?x-oss-process=image/resize,w_1600/interlace,1"
                                         alt=""/></div>
      <div class="info_under_header_box">
        <div class="info_under_header">
          <path-restaurant :link="areaLink" :area_name="areaName" :restaurant_name="restName"></path-restaurant>
          <div class="return">
            <a :href="areaLink" class="return_link">
              رستوران‌ها
              <span class="_2see2 _3FcZB _3wUgW">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20"><path
                                      fill="currentColor" fill-rule="evenodd"
                                      d="M9.17 19.708L.607 11.444a1.95 1.95 0 0 1 0-2.827L9.232.292c.4-.385 1.048-.39 1.454-.01a.976.976 0 0 1 .011 1.425L2.803 9.324a.975.975 0 0 0 0 1.414l7.831 7.557a.974.974 0 0 1 0 1.413c-.405.39-1.06.39-1.464 0z"
                                    ></path></svg></span></a></div>
          <div class="rest_pic rest_pic2"><img
            :src="logoUrl"
            class="_199RC" :alt="restName"/></div>
          <meta
            link_path
          />
          <meta link_path/>
          <div class="_3IOs0">
            <div class="_3FT7u" link_path>
              <div class="_2F0z5"><span class="_2i4iO"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><defs
              ><linearGradient id="innerGradiant" x1="0%" y1="0%" x2="100%"
                               y2="0%"><stop offset="0%"
                                             style="stop-color:#50d258;stop-opacity:0.3;"
              ></stop><stop
                offset="100%" style="stop-color:#0dd0af;stop-opacity:0.3;"
              ></stop></linearGradient></defs><circle class="_3zOIE" cx="50%"
                                                      cy="50%" r="7.5"
              ></circle><circle
                class="_1rR4Y" cx="50%" cy="50%" r="3.5" fill="url(#innerGradiant)"
              ></circle></svg></span><span class="-Vjdw">سفارش می‌پذیرد</span>
              </div>
            </div>
            <h1 class="_2yzqI"><a class="_26gzY"
                                  :href="restLink"
            >{{restName}}</a>
            </h1></div>
          <div class="KyMdW">
            <div class="_3nivz _32V2R _27rPt">
              <div class="_3Zv5a"><span class="_1JPFb"><!-- react-text: 94 -->(
                <!-- /react-text --><!-- react-text: 95 -->69<!-- /react-text -->
                <!-- react-text: 96 -->)<!-- /react-text --></span><span class="_2aONX"
              ><!-- react-text: 98 -->
                <!-- /react-text --></span></div>
              <div class="_2Se9g">
                <div class="_2ZNxb"><span
                  style="display:inline-block;direction:ltr;"><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:22.000000000000064%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span></span></div>
              </div>
              <div class="nt9f3 _3icM0">4.2</div>
            </div>

          </div>
          <div class="_1vuPn">
            <ul class="_1pTua _3oE19">
              <rest_categories v-for="cat in categories" :key="cat" :value="cat"></rest_categories>
            </ul>
          </div>
          <address class="EFBIF">{{restAddress}}</address>
        </div>
      </div>
    </section>
    <div>
      <div id="horizontal-navigation-menu" class="_3kzhn">
        <ul class="_1ZZxG _1HEoo">
          <li class="_3PsCP"><a class="_37G9z" href="#branch-menu">منوی
            رستوران</a></li>
          <li class="_3PsCP"><a class="_37G9z" href="#branch-info">اطلاعات
            رستوران</a></li>
          <li class="_3PsCP"><a class="_37G9z" href="#branch-comment"
          >نظرات کاربران</a></li>
        </ul>
      </div>
      <section id="section-branch-menu" class="_1OKYy">
        <div class="_1hTxv">
          <ul class="_1ZZxG _1HEoo _2aFOG">
            <Menu_right v-for="cat in categories" :key="cat" :value="cat"></Menu_right>
          </ul>
        </div>
        <div class="uUS49">
          <div class="_2JbF0">
            <div class="_22lSF _1B6X6">
              <div class="_2q8Xr _3HYLH Wu8J0"><input placeholder="مثلا برگر"
                                                      class="_3VQHb" name=""
                                                      required="" value=""
              /><span
                class="_1_oZe"></span><label class="_3zsXw"
              >جستجو در منوی
                این رستوران</label>
                <div class="_1sSu_"><span class="v3mG_"><svg
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd"
                ><path
                  d="M0 0h18v18H0z"></path><g stroke="currentColor"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              transform="translate(2 2)"
                ><circle
                  cx="6.125" cy="6.125" r="6.125"></circle><path
                  d="M13.373 13.373l-2.767-2.767"></path></g><path
                  d="M0 0h18v18H0z"></path></g></svg></span></div>
                <div role="presentation" style="display:none;"><span
                  class="_1COvV _3KooK"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g
                  fill="none" fill-rule="evenodd"><path fill="currentColor"
                                                        fill-rule="nonzero"
                                                        d="M9 1.5A7.493 7.493 0 0 0 1.5 9c0 4.148 3.353 7.5 7.5 7.5 4.148 0 7.5-3.352 7.5-7.5 0-4.147-3.352-7.5-7.5-7.5zm3.75 10.193l-1.057 1.057L9 10.057 6.308 12.75 5.25 11.693 7.942 9 5.25 6.308 6.308 5.25 9 7.942l2.693-2.692 1.057 1.058L10.057 9l2.693 2.693z"
                ></path><path
                  d="M0 0h18v18H0z"></path></g></svg></span></div>
                <div class="_2w4et"></div>
              </div>
            </div>
          </div>
        </div>
        <category v-for="cat in categories" :key="cat" :category="cat" :foods="foods"></category>

      </section>
      <section id="section-branch-info" class="_3v_2d">
        <div class="_2JbF0">
          <div class="_3vBmT"><h2 class="_1ly1W">اطلاعات
            رستوران</h2></div>
          <div class="_33yOM">
            <div class="_2QBZ7">
              <div class="_2_dR6"><h3 class="g9Qwq">{{restName}}</h3>
                <address class="F07Ku"><span class="_2ihsF _1dq67"
                ><svg
                  xmlns="http://www.w3.org/2000/svg" width="13" height="17"
                  viewBox="0 0 13 17"><path fill="currentColor"
                                            fill-rule="evenodd"
                                            d="M6 0C2.683 0 0 2.66 0 5.95 0 10.412 6 17 6 17s6-6.588 6-11.05C12 2.66 9.317 0 6 0zm0 8a2 2 0 1 1 .001-4.001A2 2 0 0 1 6 8z"
                ></path></svg></span>{{restAddress}}
                </address>
                <h3 class="_32bzw"><span class="_3utVN _1dq67"
                ><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 14"><path
                  fill="#000000" fill-rule="nonzero"
                  d="M6.514.84C3.348.84.782 3.599.782 7s2.566 6.16 5.732 6.16c3.165 0 5.732-2.758 5.732-6.16S9.679.84 6.514.84zm0 2.133c.243 0 .44.212.44.473v3.08H9.38c.243 0 .44.212.44.474s-.197.474-.44.474H6.514c-.244 0-.441-.212-.441-.474V3.446c0-.261.197-.473.44-.473z"
                ></path></svg></span><!-- react-text: 1767 --> ساعت سفارش
                  گیری<!-- /react-text --></h3>
                <ul class="_1VWiI">
                  <li class="_3pwjq"><p>همه روزه</p>
                    <div><p class="_2BaIZ"><span
                    >از</span><span
                    >{{startHour}}</span><span
                    >{{startDay}}</span><span
                    >تا</span><span
                    >{{endHour}}</span><span>{{endDay}}</span>
                    </p></div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="_2gk47"><a class="_3xjYn"
                                   href="https://map.cedarmaps.com/pin/35.7237124316012,51.4094710350037/16/35.7237124316012/51.4094710350037"
                                   target="_blank"
                                   rel="nofollow noopener noreferrer"
            ><img class="_2tIIO" src="https://api.cedarmaps.com/v1/static/light/
      35.7237124316012,51.4094710350037,16/364x278@2x?access_token=db830a0c0e74470b6ac47ba1efc23ec5055fbb1c&amp;markers=https://dist.reyhoon-static.com/web-assets/images/map-marker.png?x-oss-process=image/resize,w_80|35.7237124316012,51.4094710350037"
                  alt=""
            /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="section-branch-comment" class="_1zBY1">
        <div class="_2JbF0">
          <div class="_3vBmT"><h2 class="_1ly1W"> نظرات کاربران در
            مورد {{restName}}</h2>
            <p class="_1I1Od">شما هم می‌توانید بعد از سفارش از این رستوران، نظر خود
              را درباره‌ی این رستوران ثبت کنید.</p></div>
          <div class="_2ZnNG">
            <div class="_3nivz _32V2R _27rPt"><span


            ><meta
              link_path/><meta
              link_path/></span>
              <div class="_3Zv5a"><span class="_1JPFb"><!-- react-text: 1794 -->(
                <!-- /react-text --><!-- react-text: 1795 -->69<!-- /react-text -->
                <!-- react-text: 1796 -->)<!-- /react-text --></span><span class="_2aONX"
              ><!-- react-text: 1798 -->
                <!-- /react-text --></span></div>
              <div class="_2Se9g">
                <div class="_2ZNxb"><span
                  style="display:inline-block;direction:ltr;"><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span><span
                  style="cursor:inherit;display:inline-block;position:relative;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_2TbOR" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span><span
                  style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:22.000000000000064%;"
                ><span class="_1fJEl _1A-2N _3GkrU"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                  class="_16WQ6" fill-rule="evenodd"
                  d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
                ></path></svg></span></span></span></span></div>
              </div>
              <div class="nt9f3">4.2</div>
            </div>
          </div>
          <div class="_10dFG">
            <div class="_1JRLU _2cH87">
              <div class="_3C8VU">
                <div class="_3pfgg">
                  <div class="tLb9X" style="width:78.1%;"></div>
                </div>
                <div class="_3zy4A">3.9</div>
              </div>
              <h3 class="_3H7Ss">کیفیت غذا</h3></div>
            <div class="_1JRLU _2cH87">
              <div class="_3C8VU">
                <div class="_3pfgg">
                  <div class="tLb9X" style="width:89.26%;"></div>
                </div>
                <div class="_3zy4A">4.5</div>
              </div>
              <h3 class="_3H7Ss">کیفیت بسته بندی</h3></div>
            <div class="_1JRLU _2cH87">
              <div class="_3C8VU">
                <div class="_3pfgg">
                  <div class="tLb9X" style="width:89.5%;"></div>
                </div>
                <div class="_3zy4A">4.5</div>
              </div>
              <h3 class="_3H7Ss">سرعت ارسال پیک</h3></div>
            <div class="_1JRLU _2cH87">
              <div class="_3C8VU">
                <div class="_3pfgg">
                  <div class="tLb9X" style="width:93.28%;"></div>
                </div>
                <div class="_3zy4A">4.7</div>
              </div>
              <h3 class="_3H7Ss">برخورد پیک</h3></div>
          </div>
        </div>
      </section>
      <section class="_1_evM">
        <div class="F3aOb">
          <Comment v-for="com in comments" :key="com.id" :comment="com.txt"
                   :rate="com.quality" :daysBefore="com.daysBefore" :author="com.author"></Comment>
          <div class="_3uZxd">
            <span><meta link_path/></span>
            <p class="_2JkOM">
              <span>زارع</span>
            </p>
            <div class="_3w4sb">
              <p class="_21izv" link_path>5.0</p>
              <div class="_2ZNxb _3sgYN"><span
                style="display:inline-block;direction:ltr;"><span
                style="cursor:inherit;display:inline-block;position:relative;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_2TbOR" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span><span
                style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_16WQ6" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span></span></span><span
                style="cursor:inherit;display:inline-block;position:relative;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_2TbOR" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span><span
                style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_16WQ6" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span></span></span><span
                style="cursor:inherit;display:inline-block;position:relative;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_2TbOR" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span><span
                style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_16WQ6" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span></span></span><span
                style="cursor:inherit;display:inline-block;position:relative;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_2TbOR" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span><span
                style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_16WQ6" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span></span></span><span
                style="cursor:inherit;display:inline-block;position:relative;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_2TbOR" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span><span
                style="display:inline-block;position:absolute;overflow:hidden;top:0;left:0;width:100%;"
              ><span class="_1fJEl _1A-2N"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path
                class="_16WQ6" fill-rule="evenodd"
                d="M6.595.91c.224-.502.618-.526.887-.042L9.5 4.5l3.501.456c.552.071.676.445.282.829L10.5 8.5l.657 3.828c.093.545-.23.772-.706.518L7 11l-3.45 1.846c-.484.258-.8.024-.707-.518L3.5 8.5.717 5.785c-.396-.386-.273-.751.27-.815L5 4.5 6.595.91z"
              ></path></svg></span></span></span></span></div>
            </div>
            <p class="_2diI2"><!-- react-text: 1920 -->
              <!-- /react-text --></p>
            <p datetime="2019-06-25T08:38:23.028Z" class="_2VtkL"
            >10 روز قبل </p><span role="presentation" class="_1XTX8"
          >گزارش</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import pathRestaurant from '../../components/PathRestaurant'
  import axios from 'axios'
  import Rest_categories from "../../components/rest_categories";
  import Menu_right from "../../components/Menu_right";
  import Category from "../../components/Category";
  import Comment from "../../components/Comment";

  export default {
    name: "restaurant",

    components: {
      Comment,
      Category,
      Menu_right,
      Rest_categories,
      pathRestaurant
    },
    data() {
      return {
        restId: `${this.$route.params.rest}`,
        restName: "",
        restLink: "",
        areaLink: "",
        areaName: "",
        logoUrl: "",
        restAddress: "",
        startHour: "",
        endHour: "",
        startDay: "",
        endDay: "",
        foods: [],
        categories: [],
        comments: []
      };
    },
    async created() {
      axios.get("http://localhost:3001/api/restaurants/" + this.restId + "/comments")
        .then(response => {
          this.comments = response.data;
          let t = 3;
          for(let i = 0; i < this.comments.length; i++) {
            t = t +  Math.floor(Math.random() * 4) + 1;
            this.comments[i].daysBefore = t;
          }
        });

      axios.get("http://localhost:3001/api/restaurants/" + this.restId)
        .then(response => {
          console.log(response.data.address[0]);
          this.restName = response.data.name;
          this.areaLink = 'http://localhost:3001/restaurants?area=' + response.data.address[0].area;
          this.areaName = response.data.address[0].area;
          this.logoUrl = `rest-logo/${response.data.logo}`;
          this.restLink = 'http://localhost:3000/' + this.restId;
          this.restAddress = response.data.address[0].addressLine;
          for (let i = 0; i < response.data.categories.length; i++)
            this.categories[i] = response.data.categories[i].name;
          this.foods = response.data.foods;
          this.startHour = response.data.openingTime > 12 ? response.data.openingTime - 12 : response.data.openingTime;
          this.endHour = response.data.closingTime > 12 ? response.data.closingTime - 12 : response.data.closingTime;
          this.startDay = response.data.openingTime < 10 ? "صبح" : response.data.openingTime < 18 ? "ظهر" :
            "شب";
          this.endDay = response.data.closingTime < 10 ? "صبح" : response.data.closingTime < 18 ? "ظهر" :
            "شب";

        });
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: Shabnam;
    src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.eot");
    src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.eot?#iefix") format("embedded-opentype"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.woff") format("woff"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.woff2") format("woff2"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam.ttf") format("truetype");
    font-weight: 400
  }

  @font-face {
    font-family: Shabnam;
    src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.eot");
    src: url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.eot?#iefix") format("embedded-opentype"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.woff") format("woff"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.woff2") format("woff2"), url("https://dist.reyhoon-static.com/web-assets/fonts/v3.0.1/Shabnam-Bold.ttf") format("truetype");
    font-weight: 700
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  ::-webkit-input-placeholder, a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, button, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, input, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: Shabnam, Arial, Tahoma, serif
  }

  :-ms-input-placeholder, a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, button, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, input, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: Shabnam, Arial, Tahoma, serif
  }

  ::placeholder, a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, button, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, input, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: Shabnam, Arial, Tahoma, serif
  }

  button::-moz-focus-inner {
    border: 0
  }

  a {
    cursor: pointer
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block
  }

  body, html {
    text-align: right;
    direction: rtl;
    background-color: #fafafa
  }

  html {
    font-size: 62.5%
  }

  body {
    line-height: 25px;
    line-height: 2.5rem;
    margin: 0;
    font-size: 14px;
    font-size: 1.4rem
  }

  h1 {
    font-size: 24px;
    font-size: 2.4rem
  }

  ol, ul {
    list-style: none
  }

  label {
    outline: none
  }

  blockquote, q {
    quotes: none
  }

  blockquote:after, blockquote:before, q:after, q:before {
    content: "";
    content: none
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  ._2k0z2 {
    z-index: 1100 !important
  }

  .hidden {
    display: none !important
  }

  @media (max-width: 480px) {
    .mobile-hidden {
      display: none !important
    }
  }

  @media (max-width: 1024px) and (min-width: 481px) {
    .tablet-hidden {
      display: none !important
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    .desktop-hidden {
      display: none !important
    }
  }

  @media (min-width: 1281px) {
    .large-screen-hidden {
      display: none !important
    }
  }

  .notif-transition-enter {
    top: -160px;
    top: -10rem;
    opacity: 0;
    -webkit-animation: slideDown 1s;
    animation: slideDown 1s
  }

  .notif-transition-enter-active {
    opacity: 1
  }

  .notif-transition-leave {
    opacity: 1;
    -webkit-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out
  }

  .notif-transition-leave-active {
    opacity: .01
  }

  .notif {
    position: relative;
    overflow: hidden;
    border-radius: .3rem;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    max-height: 640px;
    max-height: 40rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 .3rem 2rem rgba(0, 0, 0, .2);
    box-shadow: 0 .3rem 2rem rgba(0, 0, 0, .2);
    padding: 40px;
    padding: 2.5rem;
    color: #fff;
    font-weight: 700;
    border-right-width: 3.2px;
    border-right-width: .2rem;
    border-right-style: solid
  }

  .notif--success {
    background-color: #effdf6;
    color: #05da78;
    border-color: #05da78
  }

  .notif--info {
    background-color: #f5f9ff;
    color: #5890ff;
    border-color: #5890ff
  }

  .notif--warning {
    background-color: #fffdf4;
    color: #fbd249;
    border-color: #fbd249
  }

  .notif--danger {
    background-color: #fff2ef;
    color: #fd8366;
    border-color: #fd8366
  }

  .notif__container {
    position: fixed;
    top: 16px;
    top: 1rem;
    right: 0;
    left: 0;
    z-index: 1000;
    width: 80%;
    max-width: 640px;
    max-width: 40rem;
    margin: auto
  }

  @-webkit-keyframes slideDown {
    0% {
      opacity: 0;
      top: -10rem
    }
    to {
      opacity: 1;
      top: 1rem
    }
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      top: -10rem
    }
    to {
      opacity: 1;
      top: 1rem
    }
  }

  .Dropdown-root {
    position: relative
  }

  .Dropdown-control {
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    padding: 8px 10px;
    -webkit-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
  }

  .Dropdown-control:hover {
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .06);
    box-shadow: 0 1px 0 rgba(0, 0, 0, .06)
  }

  .Dropdown-placeholder {
    color: #4a4a4a;
    font-size: 25.6px;
    font-size: 1.6rem
  }

  .Dropdown-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: " ";
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    left: 10px;
    top: 14px;
    width: 0
  }

  .is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px
  }

  .Dropdown-menu {
    background-color: #fff;
    border: 1px solid #ccc;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .06);
    box-shadow: 0 1px 0 rgba(0, 0, 0, .06);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: -1px;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch
  }

  .Dropdown-menu .Dropdown-group > .Dropdown-title {
    padding: 8px 10px;
    color: #333;
    font-weight: 700;
    text-transform: capitalize
  }

  .Dropdown-option {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: rgba(51, 51, 51, .8);
    cursor: pointer;
    display: block;
    padding: 8px 10px
  }

  .Dropdown-option:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px
  }

  .Dropdown-option.is-selected, .Dropdown-option:hover {
    background-color: #f2f9fc;
    color: #333
  }

  .Dropdown-noresults {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #ccc;
    cursor: default;
    display: block;
    padding: 8px 10px
  }

  ._1W_7b {
    position: relative;
    color: #fff;
    margin-top: 0;
    z-index: 160
  }

  .pjDQV {
    direction: ltr;
    text-decoration: none;
    margin-left: 16px;
    margin-left: 1rem
  }

  ._2Fh2m, .pjDQV, .pjDQV:visited {
    color: #4a4a4a
  }

  ._2Fh2m {
    width: 100%;
    height: 88px;
    height: 5.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: static;
    top: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 .4rem .8rem rgba(0, 0, 0, .21);
    box-shadow: 0 .4rem .8rem rgba(0, 0, 0, .21);
    z-index: 10;
    -webkit-border-image: -webkit-gradient(linear, right top, left top, from(#8b00af), color-stop(#d40062), to(#ff0613)) 1;
    -webkit-border-image: -webkit-linear-gradient(right, #8b00af, #d40062, #ff0613) 1;
    -o-border-image: -o-linear-gradient(right, #8b00af, #d40062, #ff0613) 1;
    border-image: -webkit-gradient(linear, right top, left top, from(#8b00af), color-stop(#d40062), to(#ff0613)) 1;
    border-image: linear-gradient(270deg, #8b00af, #d40062, #ff0613) 1;
    border-width: 0 0 4.8px;
    border-width: 0 0 .3rem;
    border-style: solid
  }

  ._2tWg- {
    margin-top: 88px;
    margin-top: 5.5rem
  }

  ._2tWg- ._2Fh2m {
    position: fixed
  }

  ._312V4 {
    padding-left: 64px;
    padding-left: 4rem;
    position: relative
  }

  ._312V4, .jo1T3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .jo1T3 {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 16px;
    padding: 0 1rem;
    cursor: pointer;
    margin-left: 32px;
    margin-left: 2rem
  }

  ._1joqO {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  ._2UTj1 {
    font-size: 22.4px;
    font-size: 1.4rem;
    font-weight: 700;
    margin-right: 16px;
    margin-right: 1rem
  }

  ._14Wxn {
    font-size: 16px;
    font-size: 1rem;
    color: #4a4a4a;
    text-decoration: none
  }

  ._14Wxn:hover {
    color: #d40062
  }

  ._3gIFF {
    display: inline-block;
    height: 20px;
    width: 2px;
    background-color: #cbcbcb;
    vertical-align: middle;
    margin: auto 0
  }

  ._2tRUd a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: auto;
    padding: 0;
    text-decoration: none;
    color: #4a4a4a;
    -webkit-transition: border-color .3s;
    -o-transition: border-color .3s;
    transition: border-color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  ._2tRUd a:hover {
    color: #d40062
  }

  ._3ddhr a {
    padding: 0 16px;
    padding: 0 1rem
  }

  ._3ddhr ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  ._2dvjl, ._3qEfL {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  ._3qEfL {
    margin-right: auto
  }

  ._2tRUd {
    display: inline-block
  }

  ._10zzd {
    width: 179.2px !important;
    width: 11.2rem !important
  }

  ._1wpQr {
    color: #fff;
    height: 104px;
    height: 6.5rem;
    line-height: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .ZgDjx {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10
  }

  ._3n6cQ {
    width: 456px;
    width: 28.5rem;
    background-color: #fff;
    position: absolute;
    top: 120px;
    top: 7.5rem;
    right: -12.8px;
    right: -.8rem;
    z-index: 20;
    border: 1px solid #e2e2e2;
    font-size: 20.8px;
    font-size: 1.3rem;
    border-radius: 0 0 .4rem .4rem;
    -webkit-box-shadow: 0 0 .4rem rgba(0, 0, 0, .12);
    box-shadow: 0 0 .4rem rgba(0, 0, 0, .12)
  }

  ._3n6cQ li:after {
    display: block;
    content: "";
    width: 90%;
    height: 1.6px;
    height: .1rem;
    margin: 0 auto;
    background-color: #e9e9e9
  }

  ._3n6cQ li:after, ._3n6cQ li:hover:after {
    -webkit-transition: background-color .3s;
    -o-transition: background-color .3s;
    transition: background-color .3s
  }

  ._3n6cQ li:hover:after {
    background-color: #cbcbcb
  }

  ._3n6cQ li:last-child:after {
    content: normal
  }

  ._3n6cQ a {
    color: #4a4a4a;
    text-decoration: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 24px;
    padding: 1.5rem
  }

  ._3n6cQ a, ._3n6cQ a:hover {
    -webkit-transition: padding-right .3s;
    -o-transition: padding-right .3s;
    transition: padding-right .3s
  }

  ._3n6cQ a:hover {
    padding-right: 40px;
    padding-right: 2.5rem
  }

  ._3n6cQ:before {
    content: "";
    width: 32px;
    width: 2rem;
    height: 32px;
    height: 2rem;
    border: 1.6px solid #e2e2e2;
    border: .1rem solid #e2e2e2;
    position: absolute;
    top: -17.6px;
    top: -1.1rem;
    right: 32px;
    right: 2rem;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #fff;
    border-bottom: none;
    border-right: none
  }

  ._583LV {
    background-color: #fff2ef;
    color: #4a4a4a;
    padding: 16px;
    padding: 1rem;
    text-align: center
  }

  ._7NoKI {
    background-color: #fff;
    border-bottom: 1.6px solid #e9e9e9;
    border-bottom: .1rem solid #e9e9e9;
    -webkit-box-shadow: 0 .4rem 1rem 0 rgba(0, 0, 0, .11);
    box-shadow: 0 .4rem 1rem 0 rgba(0, 0, 0, .11)
  }

  ._2emGn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  @media (max-width: 480px) {
    .jo1T3 {
      padding: 0
    }

    ._312V4 {
      padding-left: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center
    }

    ._1joqO {
      margin-right: 3.5rem;
      line-height: 15.9px
    }
  }

  @media (max-width: 1024px) {
    .tsgBH {
      display: none
    }

    ._10zzd {
      width: 8rem !important
    }
  }

  @media (min-width: 1025px) {
    ._1joqO {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center
    }

    .jo1T3 {
      margin-left: 3rem
    }

    ._14Wxn {
      font-size: 1.4rem
    }
  }

  ._22lSF {
    padding: 0 8px;
    padding: 0 .5rem;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: inherit;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: inherit;
    flex-direction: inherit;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  @media (min-width: 769px) {
    ._22lSF {
      padding: 0 1rem
    }
  }

  @media (min-width: 1281px) {
    ._22lSF {
      max-width: 120rem;
      padding: 0 2rem
    }
  }

  .MQuL8 {
    display: inline-block;
    width: 272px;
    width: 17rem;
    color: #4a4a4a
  }

  ._1FLKe {
    fill: #fff
  }

  ._1vdLC {
    fill: #000
  }

  ._2JbF0 {
    margin: 0 auto;
    max-width: 1190.4px;
    max-width: 74.4rem;
    padding: 0 16px;
    padding: 0 1rem
  }

  ._1B6X6 {
    padding: 0 !important;
    position: relative;
    margin-top: 0
  }

  ._1vTJy {
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: right;
    color: #202020;
    margin-bottom: 32px;
    margin-bottom: 2rem;
    top: 80px;
    top: 5rem;
    background-color: #fafafa;
    padding: 16px;
    padding: 1rem;
    border-radius: 0 0 .5rem .5rem;
    position: -webkit-sticky;
    position: sticky;
    z-index: 100
  }

  .under_header {
    position: relative;
    z-index: 100;
    max-width: 100%;
    overflow: visible
  }

  .pic_under_header {
    overflow: hidden;
    margin-bottom: 0;
    height: 208px;
    height: 13rem;
    background-color: #eee
  }

  .image_under_header {
    max-width: 100%;
    height: auto;
    display: block;
    margin: auto
  }

  .info_under_header_box {
    border-radius: .4rem .4rem 0 0;
    background-color: #fff;
    -webkit-box-shadow: 0 .4rem 1.6rem 0 rgba(0, 0, 0, .11);
    box-shadow: 0 .4rem 1.6rem 0 rgba(0, 0, 0, .11);
    margin: 0 auto;
    width: 100%;
    margin-left: 0;
    left: 0;
    bottom: auto;
    top: 0
  }

  ._1OKYy, .info_under_header_box {
    position: relative
  }

  ._3kzhn {
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: auto;
    top: -1.6px;
    top: -.1rem;
    display: block;
    z-index: 110;
    -webkit-box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1);
    box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1)
  }

  ._3kzhn, .uUS49 {
    margin-top: 0
  }

  ._3v_2d {
    margin-top: 160px;
    margin-top: 10rem
  }

  ._33yOM {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  ._2gk47, ._2QBZ7 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%
  }

  ._1zBY1 {
    margin-top: 160px;
    margin-top: 10rem;
    position: relative
  }

  ._1zBY1 ._2JbF0 {
    border-bottom: 1.6px solid #e2e2e2;
    border-bottom: .1rem solid #e2e2e2;
    padding-bottom: 48px;
    padding-bottom: 3rem
  }

  ._10dFG {
    width: 100%;
    margin: auto
  }

  ._2ZnNG {
    margin-top: 48px;
    margin-top: 3rem;
    margin-bottom: 48px;
    margin-bottom: 3rem
  }

  ._1hTxv {
    display: none
  }

  ._1bNPP {
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap
  }

  ._1bNPP, ._2TnWh {
    text-align: center
  }

  ._2TnWh {
    color: #9b9b9b
  }

  ._3KVZs {
    min-width: 80px;
    min-width: 5rem;
    border-radius: 2rem;
    display: inline-block;
    min-height: 48px;
    min-height: 3rem;
    border: 0;
    color: #fff;
    padding: 16px 48px;
    padding: 1rem 3rem;
    font-size: 22.4px;
    font-size: 1.4rem;
    cursor: pointer;
    outline: none;
    background-color: #6936eb;
    margin-top: 19.2px;
    margin-top: 1.2rem
  }

  .Wu8J0 input:focus ~ label {
    display: none
  }

  ._3fLj- {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    top: 88px;
    top: 5.5rem;
    bottom: 0;
    left: 0;
    width: 100%
  }

  .P3AhQ {
    font-size: 24px;
    font-size: 1.5rem;
    color: #202020;
    text-align: center;
    margin-bottom: 52.8px;
    margin-bottom: 3.3rem;
    padding: 0 48px;
    padding: 0 3rem
  }

  ._2Y7NT, .P3AhQ {
    position: relative;
    z-index: 1
  }

  ._2Y7NT {
    max-width: 400px;
    max-width: 25rem;
    margin-bottom: 56px;
    margin-bottom: 3.5rem
  }

  ._2h8xU {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="6" /></filter></svg>#filter');
    -webkit-filter: blur(6px);
    filter: blur(6px)
  }

  @media (min-width: 481px) {
    .pic_under_header .image_under_header {
      max-width: 100%;
      height: auto;
      display: block;
      margin: auto
    }
  }

  @media (min-width: 769px) {
    ._2Y7NT {
      max-width: 34.1rem
    }

    .P3AhQ {
      font-size: 1.5rem;
      padding: 0
    }

    .pic_under_header {
      overflow: hidden;
      margin-bottom: 17rem;
      height: 29.5rem
    }

    .pic_under_header .image_under_header {
      max-width: 100%;
      height: auto;
      display: block;
      margin: auto
    }

    .under_header {
      overflow: hidden
    }

    ._3kzhn {
      position: -webkit-sticky;
      position: sticky;
      width: 74.4rem;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: auto;
      top: 0;
      display: block;
      z-index: 110;
      -webkit-box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1);
      box-shadow: 0 1.7rem 1.4rem -.8rem rgba(0, 0, 0, .1);
      margin-top: -6rem
    }

    .info_under_header_box {
      width: 74.4rem;
      margin-left: -37.2rem;
      position: absolute;
      left: 50%;
      top: auto;
      bottom: 2rem
    }

    ._2gk47 {
      -ms-flex-preferred-size: 40%;
      flex-basis: 40%
    }

    ._2QBZ7 {
      -ms-flex-preferred-size: 45%;
      flex-basis: 45%
    }

    ._10dFG {
      width: 70%;
      margin: auto
    }

    ._2JbF0 {
      padding: 0
    }

    ._1zBY1, ._3v_2d {
      margin-top: 5rem
    }

    ._1vTJy {
      font-size: 2rem;
      margin-bottom: 2rem;
      top: auto;
      padding: 0;
      position: static
    }

    .uUS49 {
      margin-top: 0
    }
  }

  @media (min-width: 1025px) {
    ._1B6X6 {
      margin-top: 2rem
    }
  }

  @media (min-width: 1025px) {
    .pic_under_header .image_under_header {
      margin: auto
    }

    ._1hTxv {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      top: 10rem;
      float: right;
      margin-right: 4.5%;
      margin-top: 12rem;
      max-width: 9rem
    }

    ._1bNPP {
      height: 30rem
    }
  }

  @media (min-width: 1281px) {
    .pic_under_header .image_under_header {
      width: 100%;
      margin: auto
    }

    ._1hTxv {
      margin-right: 10.5%;
      max-width: 13rem
    }
  }

  .info_under_header {
    border-radius: 1rem 1rem 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    width: 100%;
    margin: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: auto;
    padding: 32px 32px 0;
    padding: 2rem 2rem 0
  }

  .path_under_header2 {
    right: 0;
    display: none !important
  }

  .return, .path_under_header2 {
    position: absolute;
    top: -64px;
    top: -4rem
  }

  .return {
    left: 24px;
    left: 1.5rem;
    text-align: center
  }

  .return_link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: hsla(0, 0%, 100%, .9);
    border-radius: .4rem;
    padding: 0 16px;
    padding: 0 1rem;
    font-size: 19.2px;
    font-size: 1.2rem;
    color: #777;
    text-decoration: none
  }

  ._3wUgW {
    width: 6.4px !important;
    width: .4rem !important;
    margin: 0 16px;
    margin: 0 1rem;
    color: #777;
    margin-left: 0
  }

  ._3IOs0 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    text-align: center
  }

  .rest_pic2 {
    margin-bottom: 32px !important;
    margin-bottom: 2rem !important;
    margin-top: -112px !important;
    margin-top: -7rem !important
  }

  ._184_N {
    background-color: #e2e2e2
  }

  ._2yzqI {
    font-size: 48px;
    font-size: 3rem;
    font-weight: 700;
    color: #202020;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-item-align: center;
    align-self: center;
    text-align: center;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    display: inline-block
  }

  ._26gzY, ._26gzY:active, ._26gzY:hover, ._26gzY:link {
    color: #202020;
    cursor: default;
    text-decoration: none;
    outline: none
  }

  ._1vuPn {
    -ms-flex-item-align: center;
    justify-self: center;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    margin-top: 0
  }

  ._1vuPn, .EFBIF {
    text-align: center;
    align-self: center
  }

  .EFBIF {
    font-size: 24px;
    font-size: 1.5rem;
    color: #4a4a4a;
    font-style: normal;
    margin-top: 6.4px;
    margin-top: .4rem;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-item-align: center;
    margin-bottom: 32px;
    margin-bottom: 2rem
  }

  ._3FT7u {
    text-align: center;
    position: relative;
    right: auto;
    top: 0;
    display: inline-block;
    margin: auto 0 8px 8px;
    margin: auto 0 .5rem .5rem
  }

  ._3FT7u, .KyMdW {
    -ms-flex-item-align: center;
    align-self: center
  }

  .KyMdW {
    margin-top: auto;
    margin-bottom: 0;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%
  }

  .U5PZw {
    margin-left: 16px;
    margin-left: 1rem
  }

  .U5PZw:last-child {
    margin-left: 0
  }

  ._3oXl3 {
    padding: 16px 0;
    padding: 1rem 0;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  ._3oXl3:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1.6px;
    height: .1rem;
    left: 0;
    background-image: -webkit-radial-gradient(51% 0, circle, #f3f3f3, #e9e9e9 62%, hsla(0, 0%, 89%, 0));
    background-image: -o-radial-gradient(51% 0, circle, #f3f3f3, #e9e9e9 62%, hsla(0, 0%, 89%, 0));
    background-image: radial-gradient(circle at 51% 0, #f3f3f3, #e9e9e9 62%, hsla(0, 0%, 89%, 0))
  }

  ._3oXl3 .mKKp_ {
    width: 160px;
    width: 10rem;
    margin: auto
  }

  @media (min-width: 769px) {
    .path_under_header2 {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important
    }

    .return {
      left: 0
    }

    .info_under_header {
      padding: 4rem 0
    }

    .EFBIF {
      margin-top: 1rem
    }

    ._2yzqI {
      margin-bottom: 2rem
    }

    ._1vuPn {
      margin-top: 1.5rem;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%
    }

    .KyMdW {
      margin-bottom: auto
    }

    ._3FT7u {
      -ms-flex-item-align: center;
      align-self: center;
      text-align: center;
      margin-top: auto;
      position: absolute;
      right: 1rem;
      top: 2rem;
      margin-right: auto
    }
  }

  .path_under_header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: hsla(0, 0%, 100%, .9);
    border-radius: .4rem;
    padding: 0 16px;
    padding: 0 1rem
  }

  ._20sJg {
    width: 6.4px !important;
    width: .4rem !important;
    margin: 0 16px;
    margin: 0 1rem
  }

  .link_path {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #777;
    font-size: 19.2px;
    font-size: 1.2rem
  }

  .link_path:last-child {
    font-weight: 700
  }

  .span_link {
    color: #5890ff;
    text-decoration: none
  }

  ._2see2 {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s
  }

  ._2see2 svg {
    width: 100%;
    height: 100%
  }

  ._3Otz1 {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
  }

  ._3cwWr {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg)
  }

  .oqKwj {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  .rest_pic {
    width: 80px;
    width: 5rem;
    height: 80px;
    height: 5rem;
    border-radius: .4rem;
    border: 1.6px solid #e2e2e2;
    border: .1rem solid #e2e2e2;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin: auto auto 9.6px;
    margin: auto auto .6rem;
    -ms-flex-item-align: center;
    align-self: center;
    overflow: hidden;
    background-color: #fafafa
  }

  ._1MpKv {
    width: 91.2px;
    width: 5.7rem;
    height: 91.2px;
    height: 5.7rem;
    border: none
  }

  ._199RC, .Z-XQR {
    width: 100%;
    height: 100%;
    display: block;
    color: transparent
  }

  @media (min-width: 769px) {
    .rest_pic {
      width: 8rem;
      height: 8rem;
      -webkit-box-shadow: .4rem .2rem .4rem 0 hsla(210, 9%, 87%, .3), inset 0 0 0 .05rem rgba(0, 0, 0, .15);
      box-shadow: .4rem .2rem .4rem 0 hsla(210, 9%, 87%, .3), inset 0 0 0 .05rem rgba(0, 0, 0, .15);
      margin: auto
    }
  }

  ._2F0z5 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  ._2KH8u {
    width: 32px;
    width: 2rem;
    height: 32px;
    height: 2rem;
    color: #202020
  }

  .-Vjdw {
    color: #4a4a4a;
    margin: 0 8px 0 16px;
    margin: 0 .5rem 0 1rem;
    font-size: 17.6px;
    font-size: 1.1rem;
    display: block
  }

  ._279xB {
    border-radius: 10rem;
    background-color: #777
  }

  ._279xB .-Vjdw {
    color: #fff
  }

  ._2i4iO {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  ._2i4iO svg {
    width: 100%;
    height: 100%
  }

  ._1bWlq ._3zOIE {
    -webkit-animation: cG2d- 1s ease-in-out infinite alternate;
    animation: cG2d- 1s ease-in-out infinite alternate
  }

  ._3zOIE {
    fill: #9cf1a9
  }

  ._1rR4Y {
    -webkit-box-shadow: 0 2px 4px 0 #26d18f;
    box-shadow: 0 2px 4px 0 #26d18f
  }

  ._2_-Ye ._3zOIE {
    fill: #ff585b
  }

  ._2_-Ye ._1rR4Y {
    fill: #ff0613
  }

  ._1cEcj ._3zOIE {
    fill: #fff690
  }

  ._1cEcj ._1rR4Y {
    fill: #fff500
  }

  @-webkit-keyframes cG2d- {
    0% {
      r: 7.5;
      opacity: .4
    }
    to {
      r: 10;
      opacity: .1
    }
  }

  @keyframes cG2d- {
    0% {
      r: 7.5;
      opacity: .4
    }
    to {
      r: 10;
      opacity: .1
    }
  }

  ._3nivz {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
  }

  ._3nivz:before {
    margin-right: 14.4px;
    margin-right: .9rem
  }

  ._3nivz:after, ._3nivz:before {
    content: "";
    display: inline-block;
    width: 48px;
    width: 3rem;
    height: 1.6px;
    height: .1rem;
    background-color: #e2e2e2
  }

  ._3nivz:after {
    margin-left: 14.4px;
    margin-left: .9rem
  }

  .nt9f3 {
    color: #ffc300;
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 700
  }

  ._2Se9g {
    margin: 0 6.4px;
    margin: 0 .4rem;
    padding-top: 8px;
    padding-top: .5rem
  }

  ._3Zv5a {
    color: #9b9b9b
  }

  ._1JPFb {
    font-size: 19.2px;
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 4.8px;
    margin-left: .3rem
  }

  ._2aONX {
    display: none
  }

  ._32V2R {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  ._32V2R:after, ._32V2R:before {
    display: none
  }

  ._32V2R .nt9f3 {
    -ms-flex-preferred-size: auto;
    flex-basis: auto
  }

  ._3GkrU {
    width: 32px !important;
    width: 2rem !important;
    height: 32px !important;
    height: 2rem !important
  }

  ._27rPt {
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  @media (min-width: 1025px) {
    ._3nivz {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end
    }

    ._3nivz:after, ._3nivz:before {
      display: none
    }

    ._2Se9g {
      margin: -.5rem 0
    }

    .nt9f3 {
      font-size: 3.5rem;
      line-height: 3.5rem
    }

    .itw-e {
      font-size: 2rem
    }

    ._2aONX {
      display: inline-block
    }
  }

  @media (min-width: 769px) {
    ._32V2R {
      text-align: left;
      -ms-flex-item-align: end;
      align-self: flex-end;
      justify-self: left;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start
    }

    ._32V2R .nt9f3 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      font-size: 2rem;
      line-height: 2.3rem;
      margin-right: .3rem
    }

    ._3icM0.nt9f3 {
      -ms-flex-preferred-size: auto;
      flex-basis: auto
    }

    ._27rPt {
      text-align: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center
    }
  }

  ._2ZNxb {
    direction: ltr;
    text-align: left
  }

  ._2ZNxb ._1A-2N {
    width: 20.8px;
    width: 1.3rem;
    height: 20.8px;
    height: 1.3rem;
    margin: 3.2px;
    margin: .2rem
  }

  ._1fJEl {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  ._2TbOR {
    fill: #cbcbcb
  }

  ._16WQ6 {
    fill: #ffc300
  }

  ._1ENUV {
    fill: #191919
  }

  ._140jT {
    fill: #fff
  }

  ._1pTua {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline
  }

  ._3oE19 {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  ._3KPKu {
    padding: 0;
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 700
  }

  ._3KPKu:after {
    content: "";
    display: inline-block;
    width: 6.4px;
    width: .4rem;
    height: 6.4px;
    height: .4rem;
    border-radius: 1rem;
    margin: 0 11.2px;
    margin: 0 .7rem;
    background-color: #4a4a4a
  }

  ._3KPKu:last-child:after {
    display: none
  }

  ._1ZZxG {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    list-style: none;
    margin: auto;
    padding: 0;
    height: 80px;
    height: 5rem;
    background-color: #fff;
    position: relative;
    -ms-flex-pack: distribute;
    justify-content: space-around
  }

  ._1HEoo:before {
    width: 100%;
    height: 1.6px;
    height: .1rem;
    left: 0
  }

  ._1HEoo._2aFOG:before, ._1HEoo:before {
    content: "";
    position: absolute;
    top: 0;
    background-image: -webkit-radial-gradient(51% 0, circle, #f3f3f3, #e9e9e9 62%, hsla(0, 0%, 89%, 0));
    background-image: -o-radial-gradient(51% 0, circle, #f3f3f3, #e9e9e9 62%, hsla(0, 0%, 89%, 0));
    background-image: radial-gradient(circle at 51% 0, #f3f3f3, #e9e9e9 62%, hsla(0, 0%, 89%, 0))
  }

  ._1HEoo._2aFOG:before {
    width: 1.6px;
    width: .1rem;
    height: 100%;
    left: auto;
    right: -16px;
    right: -1rem
  }

  ._3PsCP {
    padding: 0
  }

  ._3PsCP:first-of-type {
    padding-right: 0
  }

  ._3PsCP:last-of-type {
    padding-left: 0
  }

  ._37G9z {
    font-weight: 400;
    text-align: center;
    color: #777;
    position: relative;
    display: block;
    text-decoration: none;
    -webkit-transition: all .6s;
    -o-transition: all .6s;
    transition: all .6s;
    font-size: 19.2px;
    font-size: 1.2rem
  }

  ._2rTv1 ._37G9z, ._37G9z:hover {
    color: #202020
  }

  ._2rTv1 ._37G9z:before {
    content: "";
    position: absolute;
    bottom: -20.8px;
    bottom: -1.3rem;
    left: 50%;
    margin-left: -25.6px;
    margin-left: -1.6rem;
    width: 51.2px;
    width: 3.2rem;
    height: 3.2px;
    height: .2rem;
    background-color: #d40062
  }

  ._2aFOG {
    display: list-item;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    height: auto;
    -ms-flex-item-align: start;
    align-self: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    background-color: transparent
  }

  ._2aFOG ._3PsCP {
    padding: 0;
    margin-bottom: 48px;
    margin-bottom: 3rem;
    text-align: right
  }

  ._2aFOG ._3PsCP:last-of-type {
    margin-bottom: 0
  }

  ._2aFOG ._23F0j:before {
    left: auto;
    right: 0;
    bottom: -8px;
    bottom: -.5rem
  }

  ._2aFOG ._37G9z {
    text-align: right
  }

  ._2aFOG ._2rTv1 ._37G9z {
    color: #202020;
    margin-right: 16px;
    margin-right: 1rem
  }

  ._2aFOG ._2rTv1 ._37G9z:before {
    right: 0;
    left: auto
  }

  @media (max-height: 1130px) {
    ._147eu._2aFOG ._3PsCP {
      margin-bottom: 1.3rem
    }

    ._147eu._2aFOG ._3PsCP:last-of-type {
      margin-bottom: 0
    }

    ._147eu._2aFOG ._2rTv1 ._37G9z:before {
      bottom: -.2rem
    }
  }

  @media (max-height: 768px) {
    ._147eu._2aFOG {
      top: -1rem
    }

    ._147eu._2aFOG ._3PsCP {
      margin-bottom: .8rem
    }

    ._147eu._2aFOG ._3PsCP:last-of-type {
      margin-bottom: 0
    }

    ._147eu._2aFOG ._2rTv1 ._37G9z:before {
      bottom: 0
    }
  }

  @media (min-width: 769px) {
    ._1ZZxG {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center
    }

    ._3PsCP {
      padding-right: 9rem;
      padding-left: 9rem
    }

    ._37G9z {
      font-size: 1.4rem
    }
  }

  ._1sSu_ {
    right: 8px;
    right: .5rem;
    top: 25%
  }

  ._1sSu_, ._3KooK {
    position: absolute;
    width: 24px !important;
    width: 1.5rem !important;
    color: #777 !important
  }

  ._3KooK {
    left: 16px;
    left: 1rem;
    top: 33%;
    cursor: pointer
  }

  ._3KooK._5QKWg {
    left: auto;
    right: 16px;
    right: 1rem
  }

  ._2q8Xr {
    position: relative;
    margin-bottom: 0;
    width: 100%
  }

  ._3VQHb {
    font-size: 25.6px;
    font-size: 1.6rem;
    padding: 16px 16px 16px 8px;
    padding: 1rem 1rem 1rem .5rem;
    display: block;
    border: none;
    border-bottom: 1.6px solid #cbcbcb;
    border-bottom: .1rem solid #cbcbcb;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #4a4a4a
  }

  ._5QKWg {
    direction: ltr
  }

  ._3VQHb::-webkit-input-placeholder {
    font-size: 19.2px;
    font-size: 1.2rem;
    color: transparent
  }

  ._3VQHb:-ms-input-placeholder {
    font-size: 19.2px;
    font-size: 1.2rem;
    color: transparent
  }

  ._3VQHb::placeholder {
    font-size: 19.2px;
    font-size: 1.2rem;
    color: transparent
  }

  ._3HYLH ._3VQHb {
    padding-right: 56px;
    padding-right: 3.5rem
  }

  ._3HYLH ._3zsXw {
    right: 56px;
    right: 3.5rem
  }

  ._3VQHb:focus {
    outline: none;
    background-color: #fff
  }

  ._3VQHb:focus::-webkit-input-placeholder {
    color: inherit
  }

  ._3VQHb:focus:-ms-input-placeholder {
    color: inherit
  }

  ._3VQHb:focus::placeholder {
    color: inherit
  }

  ._3zsXw {
    color: #9b9b9b;
    font-size: 19.2px;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    pointer-events: none;
    right: 16px;
    right: 1rem;
    top: 19.2px;
    top: 1.2rem;
    -webkit-transition: all .2s ease;
    -o-transition: .2s ease all;
    transition: all .2s ease;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  ._3VQHb:focus ~ ._3zsXw, ._3VQHb:valid ~ ._3zsXw {
    top: -36.8px;
    top: -2.3rem;
    right: 3.2px;
    right: .2rem;
    font-size: 17.6px;
    font-size: 1.1rem;
    color: #9b9b9b
  }

  ._1_oZe {
    position: relative;
    display: block;
    width: 100%
  }

  ._1_oZe:after, ._1_oZe:before {
    content: "";
    height: 3.2px;
    height: .2rem;
    width: 0;
    bottom: 0;
    position: absolute;
    background-color: #d40062;
    -webkit-transition: all .2s ease;
    -o-transition: .2s ease all;
    transition: all .2s ease
  }

  ._1_oZe:before {
    left: 50%
  }

  ._1_oZe:after {
    right: 50%
  }

  ._3VQHb:focus ~ ._1_oZe:after, ._3VQHb:focus ~ ._1_oZe:before {
    width: 50%
  }

  ._3VQHb:focus ~ ._31C-j {
    -webkit-animation: _1okiN .9s ease-out;
    animation: _1okiN .9s ease-out
  }

  ._2w4et {
    color: #ff0613;
    margin-top: 8px;
    margin-top: .5rem;
    display: none;
    bottom: -40px;
    bottom: -2.5rem
  }

  ._2w4et, ._3DWII ._3zsXw {
    font-size: 19.2px;
    font-size: 1.2rem;
    position: absolute
  }

  ._3DWII ._3zsXw {
    color: #ff0613 !important;
    font-weight: 400;
    pointer-events: none;
    right: 16px;
    right: 1rem;
    top: 19.2px;
    top: 1.2rem;
    -webkit-transition: all .2s ease;
    -o-transition: .2s ease all;
    transition: all .2s ease;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  ._3DWII ._1_oZe:after, ._3DWII ._1_oZe:before {
    width: 50% !important;
    background-color: #ff0613 !important
  }

  ._3DWII ._2w4et {
    display: block
  }

  @media (min-width: 769px) {
    ._3VQHb {
      font-size: 1.8rem
    }

    ._3VQHb::-webkit-input-placeholder {
      font-size: 1.8rem
    }

    ._3VQHb:-ms-input-placeholder {
      font-size: 1.8rem
    }

    ._3VQHb::placeholder {
      font-size: 1.8rem
    }

    ._3zsXw {
      font-size: 1.4rem
    }
  }

  .v3mG_ {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  .v3mG_ svg {
    width: 100%;
    height: 100%
  }

  ._1COvV {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  ._3U1yg {
    position: -webkit-sticky;
    position: sticky;
    z-index: 100;
    margin-bottom: 0;
    top: 80px;
    top: 5rem
  }

  ._1EisB {
    display: none
  }

  ._3sbFq {
    width: 8px !important;
    width: .5rem !important;
    -webkit-transform: rotate(-90deg) translate(-.8rem, -.5rem);
    -ms-transform: rotate(-90deg) translate(-.8rem, -.5rem);
    transform: rotate(-90deg) translate(-.8rem, -.5rem);
    display: inline-block
  }

  ._2l6I_ {
    display: block;
    position: absolute;
    width: 320px;
    width: 20rem;
    height: 0;
    overflow: hidden;
    top: 73.6px;
    top: 4.6rem;
    background-color: #fff;
    padding: 0 32px;
    padding: 0 2rem;
    z-index: 2;
    -webkit-transition: height .3s;
    -o-transition: height .3s;
    transition: height .3s
  }

  ._2l6I_, ._3aTRM {
    bottom: 0;
    right: 0
  }

  ._3aTRM {
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
    left: 0;
    top: 0;
    z-index: 1;
    display: none
  }

  ._2Qbas ._2l6I_ {
    height: 464px;
    height: 29rem;
    overflow: auto;
    padding: 0 32px 32px;
    padding: 0 2rem 2rem
  }

  ._2Qbas ._3sbFq {
    -webkit-transform: rotate(90deg) translate(.8rem, .5rem);
    -ms-transform: rotate(90deg) translate(.8rem, .5rem);
    transform: rotate(90deg) translate(.8rem, .5rem)
  }

  ._2Qbas ._3aTRM {
    display: block
  }

  ._3-eZm {
    bottom: 73.6px;
    bottom: 4.6rem;
    top: auto
  }

  ._2Qbas._3U1yg {
    z-index: 160
  }

  ._1sKGv {
    font-size: 32px;
    font-size: 2rem;
    margin-left: 16px;
    margin-left: 1rem
  }

  .rc5ms {
    position: absolute;
    background-color: rgba(0, 0, 0, .6);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    border-radius: 0 0 .5rem .5rem
  }

  ._1g9Kj {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    background-color: #fafafa;
    padding: 16px;
    padding: 1rem;
    border-radius: 0;
    position: relative;
    top: -1.6px;
    top: -.1rem
  }

  ._1g9Kj, ._-7eLQ {
    font-weight: 700;
    text-align: right;
    color: #202020
  }

  ._-7eLQ {
    font-size: 32px;
    font-size: 2rem;
    margin-bottom: 32px;
    margin-bottom: 2rem;
    margin-right: -16px;
    margin-right: -1rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background: #fff;
    padding: 32px 0 16px;
    padding: 2rem 0 1rem;
    z-index: 1
  }

  @media (min-width: 1025px) {
    ._3sbFq {
      display: none
    }

    ._3U1yg {
      position: static;
      margin-bottom: 2rem
    }

    ._1EisB {
      display: block
    }

    ._1g9Kj {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      top: auto;
      padding: 0;
      position: static
    }

    ._2l6I_ {
      display: none
    }
  }

  @media (max-width: 768px) {
    ._3U1yg {
      margin-left: -1rem;
      margin-right: -1rem
    }

    ._1g9Kj {
      background-color: #eee;
      padding-left: 2rem;
      padding-right: 2rem;
      -webkit-box-sizing: content-box;
      box-sizing: content-box
    }
  }

  ._3cbyZ {
    -webkit-box-orient: horizontal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-line-pack: justify;
    align-content: space-between
  }

  ._2bij7, ._3cbyZ {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
  }

  ._2bij7 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin-bottom: 0;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  ._2bij7:nth-of-type(odd) {
    padding-left: 0
  }

  ._2bij7:nth-of-type(2n) {
    padding-right: 0
  }

  @media (min-width: 769px) {
    ._2bij7 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      margin-bottom: 2rem
    }

    ._2bij7:nth-of-type(odd) {
      padding-left: 1rem
    }

    ._2bij7:nth-of-type(2n) {
      padding-right: 1rem
    }
  }

  .Du9Q8 {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 24px;
    padding: 1.5rem;
    border-bottom: 1.6px solid #e9e9e9;
    border-bottom: .1rem solid #e9e9e9;
    -webkit-transition: -webkit-box-shadow .2s;
    transition: -webkit-box-shadow .2s;
    -o-transition: box-shadow .2s;
    transition: box-shadow .2s;
    transition: box-shadow .2s, -webkit-box-shadow .2s;
    cursor: pointer;
    border-radius: .5rem;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .Du9Q8:before {
    content: "";
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 0;
    width: 6.4px;
    width: .4rem;
    background: -webkit-gradient(linear, left top, left bottom, from(#8b00af), to(#d40062));
    background: -webkit-linear-gradient(top, #8b00af, #d40062);
    background: -o-linear-gradient(top, #8b00af 0, #d40062 100%);
    background: linear-gradient(180deg, #8b00af 0, #d40062);
    -webkit-transition: all .1s;
    -o-transition: all .1s;
    transition: all .1s
  }

  .Du9Q8:hover {
    -webkit-box-shadow: 0 .3rem 2rem rgba(0, 0, 0, .2);
    box-shadow: 0 .3rem 2rem rgba(0, 0, 0, .2);
    -webkit-transition: all .17s ease-in-out;
    -o-transition: all .17s ease-in-out;
    transition: all .17s ease-in-out
  }

  .Du9Q8:hover ._1MYpZ {
    background-color: #d40062;
    color: #fff;
    border-color: #d40062
  }

  ._1dZpp {
    background-color: #f3f3f3;
    cursor: not-allowed
  }

  ._1dZpp:hover {
    -webkit-box-shadow: inherit;
    box-shadow: inherit
  }

  ._1dZpp ._3zhlN {
    display: none
  }

  ._3_2Li {
    overflow: hidden
  }

  ._3_2Li:before {
    top: -16px;
    top: -1rem;
    bottom: -16px;
    bottom: -1rem
  }

  ._2VBXK {
    -webkit-animation: _2VBXK .3s;
    animation: _2VBXK .3s
  }

  ._2HXOd {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  ._3IyAv {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 50%;
    flex: 1 1 50%
  }

  .a8Q-T {
    margin-left: 16px;
    margin-left: 1rem;
    color: #d40062;
    background-color: #fdf2f7;
    border-radius: .2rem;
    font-size: 16px;
    font-size: 1rem;
    padding: 0 8px;
    padding: 0 .5rem
  }

  ._1i80a, .a8Q-T {
    display: inline-block;
    font-weight: 700
  }

  ._1i80a {
    font-size: 14px
  }

  .wpuyR {
    padding-right: 16px;
    padding-right: 1rem;
    font-weight: 700
  }

  ._2NDXG {
    height: 100%
  }

  ._1T8bE, ._2NDXG {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  ._1T8bE {
    margin-left: 16px;
    margin-left: 1rem;
    width: 100%;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  ._2QxAj {
    color: #9b9b9b;
    font-size: 19.2px;
    font-size: 1.2rem;
    margin-bottom: auto;
    max-height: 64px;
    max-height: 4rem;
    overflow: hidden;
    width: 100%;
    line-height: 32px;
    line-height: 2rem;
    position: relative
  }

  ._2QxAj:after {
    content: "";
    display: block;
    position: absolute;
    background: -webkit-gradient(linear, left top, right top, color-stop(30%, #fff), to(hsla(0, 0%, 100%, 0)));
    background: -webkit-linear-gradient(left, #fff 30%, hsla(0, 0%, 100%, 0));
    background: -o-linear-gradient(left, #fff 30%, hsla(0, 0%, 100%, 0) 100%);
    background: linear-gradient(90deg, #fff 30%, hsla(0, 0%, 100%, 0));
    bottom: 0;
    left: 0;
    height: 28.8px;
    height: 1.8rem;
    width: 80px;
    width: 5rem
  }

  ._1dZpp ._2QxAj:after {
    background: -webkit-gradient(linear, left top, right top, color-stop(30%, #f3f3f3), to(hsla(0, 0%, 100%, 0)));
    background: -webkit-linear-gradient(left, #f3f3f3 30%, hsla(0, 0%, 100%, 0));
    background: -o-linear-gradient(left, #f3f3f3 30%, hsla(0, 0%, 100%, 0) 100%);
    background: linear-gradient(90deg, #f3f3f3 30%, hsla(0, 0%, 100%, 0))
  }

  ._1WkdD {
    margin-top: 19.2px;
    margin-top: 1.2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
  }

  .zRJgT {
    color: #e68e00;
    background-color: #fef9f2;
    border-radius: .2rem;
    font-size: 16px;
    font-size: 1rem;
    font-weight: 700;
    padding: 0 8px;
    padding: 0 .5rem
  }

  ._1jwm_ {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: auto
  }

  ._1Ac1O {
    color: #9b9b9b
  }

  ._5-tdu {
    color: #ff0613;
    width: 28.8px !important;
    width: 1.8rem !important
  }

  .Jlu3R {
    height: 144px;
    height: 9rem;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
    cursor: pointer
  }

  .Jlu3R, .pZerE {
    width: 144px;
    width: 9rem
  }

  ._2W0yA {
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem;
    color: #fff
  }

  ._3b203 {
    width: 24px !important;
    width: 1.5rem !important;
    height: 24px !important;
    height: 1.5rem !important
  }

  @media (min-width: 769px) {
    .Du9Q8 {
      -webkit-box-shadow: 0 .4rem .5rem 0 rgba(0, 0, 0, .05);
      box-shadow: 0 .4rem .5rem 0 rgba(0, 0, 0, .05)
    }

    ._1dZpp, ._1dZpp:hover {
      -webkit-box-shadow: inset 0 .01rem .3rem 0 rgba(0, 0, 0, .27);
      box-shadow: inset 0 .01rem .3rem 0 rgba(0, 0, 0, .27)
    }
  }

  @media (min-width: 1025px) {
    ._2W0yA {
      width: 100%;
      height: 100%;
      opacity: 0
    }

    ._3b203 {
      width: 3rem !important;
      height: 3rem !important
    }

    .Du9Q8:hover ._2W0yA {
      opacity: 1;
      -webkit-transition: opacity .3s;
      -o-transition: opacity .3s;
      transition: opacity .3s
    }
  }

  @media (max-width: 768px) {
    .Du9Q8 {
      margin-bottom: 1rem
    }
  }

  @-webkit-keyframes _2VBXK {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
    50% {
      -webkit-transform: scale(1.01);
      transform: scale(1.01)
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }

  @keyframes _2VBXK {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
    50% {
      -webkit-transform: scale(1.01);
      transform: scale(1.01)
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }

  ._1rbx3 {
    display: inline-block
  }

  ._2QPvd {
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    margin-right: 3.2px;
    margin-right: .2rem
  }

  ._290Fc ._1rbx3 {
    display: inline-block;
    position: relative;
    top: 6.4px;
    top: .4rem
  }

  ._290Fc ._2QPvd {
    display: inline-block;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    font-size: 17.6px;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.82;
    text-align: left;
    margin-right: 0
  }

  .SnCI2 {
    color: #d40062
  }

  ._1-EXF {
    border-radius: 5rem;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: 176px;
    width: 11rem;
    position: relative
  }

  ._1-EXF, ._2btQX {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 44.8px;
    height: 2.8rem
  }

  ._2btQX {
    font-size: 30.4px;
    font-size: 1.9rem;
    color: #d40062;
    outline: none;
    background-color: transparent;
    font-weight: 400;
    cursor: pointer;
    position: absolute;
    top: 0;
    width: 44.8px;
    width: 2.8rem;
    border: 1.6px solid #ffe9f3;
    border: .1rem solid #ffe9f3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 0;
    border-radius: 2rem;
    -webkit-transition: width .3s;
    -o-transition: width .3s;
    transition: width .3s
  }

  ._2btQX:hover {
    background-color: #d40062;
    color: #fff
  }

  .RDn-N {
    border-radius: 4rem;
    width: 192px;
    width: 12rem
  }

  .RDn-N ._2OCR- {
    opacity: 1;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 132.8px;
    width: 8.3rem;
    height: 32px;
    height: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  ._3duBh {
    position: relative;
    top: 2.4px;
    top: .15rem
  }

  ._2OCR- {
    font-size: 16px;
    font-size: 1rem;
    margin-right: 12.8px;
    margin-right: .8rem;
    opacity: 0;
    display: none
  }

  .P2BkQ {
    left: 0
  }

  .P2BkQ:hover ~ ._2j7gc {
    background-color: transparent !important;
    color: #d40062 !important;
    border: 1px solid #ffe9f3 !important
  }

  ._2j7gc {
    right: 0
  }

  ._2btQX:disabled {
    color: #e9e9e9
  }

  .pQTxu {
    font-size: 27.2px;
    font-size: 1.7rem;
    color: #4a4a4a;
    font-weight: 700;
    line-height: 48px;
    line-height: 3rem
  }

  ._2EpRH ._2btQX {
    color: #9b9b9b;
    border: 1px solid #9b9b9b
  }

  ._2EpRH ._2btQX:hover {
    color: #fff;
    border-color: #d40062
  }

  ._2EpRH .P2BkQ:hover ~ ._2j7gc {
    background-color: transparent !important;
    color: #9b9b9b !important;
    border: 1px solid #9b9b9b !important
  }

  @media (min-width: 769px) {
    ._1-EXF {
      border-radius: 5rem;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 11rem
    }
  }

  ._3utVN {
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem;
    display: inline-block;
    line-height: 0
  }

  .-wd1V {
    fill: #e2e2e2
  }

  ._2h1vM {
    position: relative
  }

  ._2bkKN, ._2h1vM {
    display: inline-block;
    width: 100%;
    height: 100%
  }

  ._2bkKN {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    left: 0;
    padding: 7px;
    position: absolute;
    top: 0
  }

  ._34RSl {
    width: 100%;
    height: 100%
  }

  .ReactModal__Overlay {
    z-index: 9999;
    background-color: rgba(0, 0, 0, .3) !important
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    -webkit-transition: opacity .15s ease-out;
    -o-transition: opacity .15s ease-out;
    transition: opacity .15s ease-out
  }

  .ReactModal__Content {
    -webkit-transform: scale(.5) rotateX(-30deg);
    transform: scale(.5) rotateX(-30deg);
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    max-width: 1440px;
    max-width: 90rem;
    margin: 160px auto 0;
    margin: 10rem auto 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 !important
  }

  .ReactModal__Content--after-open {
    -webkit-transform: scale(1) rotateX(0deg);
    transform: scale(1) rotateX(0deg);
    -webkit-transition: all .15s ease-in;
    -o-transition: all .15s ease-in;
    transition: all .15s ease-in;
    bottom: auto !important;
    height: auto
  }

  .ReactModal__Overlay--before-close {
    opacity: 0
  }

  .ReactModal__Content--before-close {
    -webkit-transform: scale(.5) rotateX(30deg);
    transform: scale(.5) rotateX(30deg);
    -webkit-transition: all .15s ease-in;
    -o-transition: all .15s ease-in;
    transition: all .15s ease-in
  }

  .ReactModal__Body--open, .ReactModal__Html--open {
    overflow: hidden
  }

  .header {
    position: -webkit-sticky;
    position: sticky;
    height: 97.6px;
    height: 6.1rem;
    margin: 0;
    font-weight: 700;
    font-size: 28.8px;
    font-size: 1.8rem;
    color: #4a4a4a;
    border-bottom: 3.2px solid rgba(0, 0, 0, .05);
    border-bottom: .2rem solid rgba(0, 0, 0, .05);
    background-color: #fff
  }

  .header, .icon-close-section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .icon-close-section {
    position: absolute;
    left: 48px;
    left: 3rem;
    top: 0;
    height: 100%;
    cursor: pointer
  }

  .icon-close.icon-close {
    color: #202020;
    width: 23.52px;
    width: 1.47rem;
    height: auto;
    line-height: 0
  }

  .children {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-y: auto;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: 100%
  }

  @media (max-width: 768px) {
    .ReactModal__Content {
      width: 100% !important;
      right: 0 !important;
      left: 0 !important;
      top: 5.8rem !important;
      bottom: 0 !important;
      margin: 0;
      max-height: 100%;
      border-radius: 0 !important
    }

    .icon-close.icon-close {
      width: 1.17rem
    }

    .header {
      font-size: 1.4rem
    }
  }

  ._3ySko {
    width: 100%;
    height: 100%
  }

  ._3vBmT {
    margin-bottom: 32px;
    margin-bottom: 2rem
  }

  ._1ly1W {
    font-size: 32px;
    font-size: 2rem;
    color: #4a4a4a;
    padding-right: 32px;
    padding-right: 2rem;
    padding-bottom: 11.2px;
    padding-bottom: .7rem;
    margin-bottom: 12.8px;
    margin-bottom: .8rem;
    border-bottom: 1px solid #e2e2e2
  }

  ._1I1Od, ._1ly1W {
    font-weight: 700;
    text-align: center
  }

  ._1I1Od {
    font-size: 19.2px;
    font-size: 1.2rem;
    color: #9b9b9b
  }

  @media (min-width: 769px) {
    ._1I1Od, ._1ly1W {
      text-align: right
    }
  }

  ._2_dR6 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
  }

  .g9Qwq {
    font-size: 25.6px;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: right;
    color: #202020
  }

  .F07Ku {
    line-height: 41.28px;
    line-height: 2.58rem;
    margin: 16px 0 32px;
    margin: 1rem 0 2rem;
    font-style: normal
  }

  ._32bzw, .F07Ku {
    font-size: 19.2px;
    font-size: 1.2rem;
    text-align: right;
    color: #4a4a4a
  }

  ._32bzw {
    font-weight: 700
  }

  ._1VWiI {
    padding: 0;
    margin: 0;
    display: block
  }

  ._3pwjq {
    font-size: 19.2px;
    font-size: 1.2rem;
    line-height: 2.58;
    text-align: right;
    color: #484848;
    border-bottom: 1.6px solid #e2e2e2;
    border-bottom: .1rem solid #e2e2e2;
    padding-bottom: 4.8px;
    padding-bottom: .3rem;
    margin-bottom: 4.8px;
    margin-bottom: .3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap
  }

  ._1dq67 {
    width: auto !important;
    margin-left: 9.6px;
    margin-left: .6rem
  }

  ._1dq67 svg {
    width: 20.8px !important;
    width: 1.3rem !important;
    margin-bottom: -4.8px;
    margin-bottom: -.3rem
  }

  ._1dq67 path, ._1dq67 svg {
    color: #4a4a4a;
    fill: #4a4a4a
  }

  ._2BaIZ {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    letter-spacing: -.4px
  }

  ._2BaIZ span:nth-of-type(2n) {
    margin: 0 4.8px;
    margin: 0 .3rem
  }

  @media (min-width: 1025px) {
    ._2BaIZ {
      letter-spacing: 0
    }
  }

  ._2ihsF {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  ._2ihsF svg {
    width: 100%;
    height: 100%
  }

  ._2tIIO {
    display: block;
    height: auto;
    width: 100%
  }

  ._3xjYn {
    cursor: pointer
  }

  ._1JRLU {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-top: 28.8px;
    padding-top: 1.8rem;
    padding-bottom: 28.8px;
    padding-bottom: 1.8rem
  }

  ._2cH87 {
    border-top: 1.6px solid #e2e2e2;
    border-top: .1rem solid #e2e2e2
  }

  ._3H7Ss {
    font-size: 23.04px;
    font-size: 1.44rem;
    text-align: center;
    color: #9b9b9b
  }

  ._3C8VU, ._3H7Ss {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%
  }

  ._3C8VU {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 16px;
    padding: 0 1rem
  }

  ._3zy4A {
    width: auto;
    font-size: 22.4px;
    font-size: 1.4rem;
    color: #ffc300;
    float: right;
    font-weight: 700
  }

  ._3pfgg {
    height: 16px;
    height: 1rem;
    background-color: #eee;
    overflow: hidden;
    position: relative;
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin-left: 16px;
    margin-left: 1rem
  }

  ._3pfgg, .tLb9X {
    border-radius: .4rem
  }

  .tLb9X {
    background-color: #ffc300;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0
  }

  @media (min-width: 769px) {
    ._3zy4A {
      width: 3rem
    }

    ._1JRLU {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between
    }

    ._3H7Ss {
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
      text-align: right
    }

    ._3C8VU {
      -ms-flex-preferred-size: 70%;
      flex-basis: 70%;
      padding: 0
    }
  }

  ._1_evM {
    margin-top: 48px;
    margin-top: 3rem;
    margin-bottom: 64px;
    margin-bottom: 4rem
  }

  .F3aOb {
    margin: 0 auto;
    max-width: 1190.4px;
    max-width: 74.4rem;
    padding: 0 16px;
    padding: 0 1rem
  }

  ._1EFjG {
    text-align: center;
    padding: 160px 0;
    padding: 10rem 0
  }

  @media (min-width: 769px) {
    .F3aOb {
      padding: 0
    }
  }

  ._3uZxd {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    border-bottom: 1.6px solid #cbcbcb;
    border-bottom: .1rem solid #cbcbcb;
    padding-top: 32px;
    padding-top: 2rem;
    padding-bottom: 16px;
    padding-bottom: 1rem
  }

  ._2JkOM {
    color: #4a4a4a;
    font-size: 25.6px;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: right
  }

  ._2JkOM, ._3w4sb {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%
  }

  ._3w4sb {
    text-align: left
  }

  ._3sgYN, ._21izv {
    display: inline-block
  }

  ._21izv {
    font-size: 25.6px;
    font-size: 1.6rem;
    color: #ffc300;
    font-weight: 700;
    margin-right: 16px;
    margin-right: 1rem
  }

  ._2diI2 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    position: relative;
    color: #777;
    font-size: 20.8px;
    font-size: 1.3rem;
    line-height: 48px;
    line-height: 3rem;
    margin-top: 24px;
    margin-top: 1.5rem;
    margin-bottom: 24px;
    margin-bottom: 1.5rem
  }

  ._2VtkL {
    text-align: right
  }

  ._1XTX8, ._2VtkL {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    font-size: 17.6px;
    font-size: 1.1rem;
    color: #9b9b9b
  }

  ._1XTX8 {
    text-align: left;
    cursor: pointer
  }

  ._1XTX8:hover {
    color: #d40062
  }

  .FgbAA {
    color: #ff0613
  }

  ._1WuLI {
    margin-left: 16px;
    margin-left: 1rem
  }

  ._1WuLI svg {
    width: 24px !important;
    width: 1.5rem !important
  }

  .FgbAA ._-9NsT {
    background-color: #ff0613
  }

  button {
    cursor: pointer
  }

  ._2bqKi {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 170;
    bottom: 0;
    visibility: hidden
  }

  ._1fAMr {
    position: relative
  }

  ._1U2cQ {
    color: #9b9b9b
  }

  .ZTYpK {
    visibility: visible
  }

  ._1h3Bz {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    top: 0;
    left: 0;
    z-index: 1
  }

  .ELNEG {
    color: #cbcbcb !important;
    text-decoration: line-through
  }

  .d09hF {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap column;
    flex-flow: column wrap;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    background-color: #fafafa;
    display: inline-grid;
    top: auto;
    width: 100%;
    bottom: 0;
    height: 0;
    position: fixed;
    z-index: 2;
    right: 0;
    left: 0;
    margin-left: 0;
    padding-top: 80px;
    padding-top: 5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden
  }

  ._3Dio9 {
    bottom: 0;
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth
  }

  ._1cmX2 {
    height: 64px;
    height: 4rem;
    border-radius: 0;
    background-color: #fff;
    border-bottom: 1.6px solid #e9e9e9;
    border-bottom: .1rem solid #e9e9e9;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    margin-left: auto;
    right: 0;
    z-index: 3;
    top: 0
  }

  .iPzoQ {
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 40.8px;
    line-height: 2.55rem;
    text-align: center;
    color: #191919;
    margin-left: 0
  }

  ._3Y9Cg {
    vertical-align: top;
    display: none
  }

  ._3Y9Cg svg {
    color: transparent
  }

  ._3Y9Cg g g {
    color: #191919
  }

  ._303EM {
    max-width: 320px;
    max-width: 20rem
  }

  ._154dR {
    color: #777;
    border: 1px solid #777;
    font-size: 19.2px;
    font-size: 1.2rem;
    width: 25.6px;
    width: 1.6rem;
    height: 25.6px;
    height: 1.6rem;
    display: inline-block;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 2rem;
    margin-right: 16px;
    margin-right: 1rem;
    cursor: pointer;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    vertical-align: middle;
    text-align: center;
    line-height: 28.8px;
    line-height: 1.8rem
  }

  ._1E8de {
    width: 19.2px;
    width: 1.2rem;
    height: 17.6px;
    height: 1.1rem;
    text-align: right;
    background-color: transparent;
    position: absolute;
    right: 41.6px;
    right: 2.6rem;
    top: 50%;
    margin-top: -14.4px;
    margin-top: -.9rem
  }

  ._2-eKQ {
    width: 100% !important
  }

  .pn0YP {
    border-radius: .4rem;
    background-color: #fff;
    border: 1.6px solid #e9e9e9;
    border: .1rem solid #e9e9e9;
    width: 90%;
    padding: 32px;
    padding: 2rem;
    text-align: center;
    margin: 32px auto 0;
    margin: 2rem auto 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap
  }

  ._1msbd {
    color: #d40062;
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 100;
    margin-top: 32px;
    margin-top: 2rem;
    background-color: transparent
  }

  ._18gmW {
    width: 20.8px;
    width: 1.3rem;
    height: 20.8px;
    height: 1.3rem;
    border-radius: 50%;
    text-align: center;
    border: 1.6px solid #d40062;
    border: .1rem solid #d40062;
    display: inline-block;
    margin-left: 8px;
    margin-left: .5rem;
    line-height: 25.6px;
    line-height: 1.6rem;
    font-weight: 400
  }

  ._1XYmj {
    margin: 48px auto 32px;
    margin: 3rem auto 2rem;
    width: 90%
  }

  ._2dzsy {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto 12.8px;
    margin: 0 auto .8rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  ._3zeuV {
    text-align: right
  }

  ._3zeuV, ._7nk8j {
    font-size: 24px;
    font-size: 1.5rem;
    line-height: 27.68px;
    line-height: 1.73rem;
    color: #4a4a4a
  }

  ._7nk8j {
    font-weight: 700;
    text-align: left
  }

  ._2Lhcx {
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem
  }

  .iGRgN {
    line-height: 32px;
    line-height: 2rem;
    text-align: center;
    color: #9b9b9b;
    margin: auto
  }

  ._1bcy2, .iGRgN {
    font-size: 22.4px;
    font-size: 1.4rem;
    width: 90%
  }

  ._1bcy2 {
    line-height: 27.36px;
    line-height: 1.71rem;
    text-align: right;
    color: #d40062;
    margin: 48px 5% 48px auto;
    margin: 3rem 5% 3rem auto
  }

  ._3zIB5 {
    border-top: 1.6px solid #e2e2e2;
    border-top: .1rem solid #e2e2e2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 24px;
    padding-top: 1.5rem;
    padding-bottom: 176px;
    padding-bottom: 11rem
  }

  ._2jQbq {
    text-align: right
  }

  ._2jQbq, ._gQQt {
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 40.96px;
    line-height: 2.56rem;
    color: #4a4a4a
  }

  ._gQQt {
    text-align: left
  }

  ._1I2Bu {
    border-radius: 0;
    background: -webkit-gradient(linear, right top, left top, from(#8b00af), to(#d40062));
    background: -webkit-linear-gradient(right, #8b00af, #d40062);
    background: -o-linear-gradient(right, #8b00af, #d40062);
    background: linear-gradient(270deg, #8b00af, #d40062);
    height: 80px;
    height: 5rem;
    margin: 32px auto 0;
    margin: 2rem auto 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 32px;
    padding: 0 2rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0
  }

  ._2SF-E {
    color: #fff;
    text-align: left;
    position: absolute;
    left: 16px;
    left: 1rem
  }

  .bqt7P {
    line-height: 40px;
    line-height: 2.5rem;
    text-align: right;
    color: #fff
  }

  ._1Oq8f, .bqt7P {
    font-size: 20.8px;
    font-size: 1.3rem;
    font-weight: 700
  }

  ._1Oq8f {
    line-height: 32px;
    line-height: 2rem;
    text-align: left
  }

  ._3L-1x {
    background-color: #46474d !important;
    background-image: none
  }

  ._3L-1x ._2SF-E {
    color: #fff
  }

  ._2CHlI {
    color: #cbcbcb;
    font-size: 20.8px;
    font-size: 1.3rem;
    font-weight: 100;
    margin-top: 32px;
    margin-top: 2rem;
    background-color: transparent;
    position: relative;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s
  }

  ._2CHlI:after {
    content: "\61F";
    position: absolute;
    left: -32px;
    left: -2rem;
    text-align: center;
    display: inline-block;
    line-height: 22.4px;
    line-height: 1.4rem;
    font-weight: 400;
    opacity: 0;
    margin-top: 5.12px;
    margin-top: .32rem
  }

  ._2CHlI:hover {
    color: #ff0613;
    margin-left: 16px;
    margin-left: 1rem
  }

  ._2CHlI:hover:after {
    left: -12.8px;
    left: -.8rem;
    opacity: 1;
    -webkit-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s
  }

  ._3ga9V {
    display: block;
    text-align: center;
    margin: auto;
    border-bottom: 1.6px solid #e9e9e9;
    border-bottom: .1rem solid #e9e9e9;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%
  }

  .pioX1 {
    margin: 0 auto 32px;
    margin: 0 auto 2rem;
    font-size: 22.4px;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.14;
    text-align: center;
    color: #9b9b9b
  }

  @media (min-width: 769px) {
    ._1fAMr {
      height: 0;
      top: auto;
      width: 80rem;
      bottom: -100%;
      position: fixed;
      z-index: 2;
      right: auto;
      left: 50%;
      margin-left: -40rem;
      -webkit-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s
    }

    ._1fAMr, ._3Nt5j {
      overflow: hidden;
      background-color: #fafafa
    }

    ._3Nt5j {
      height: 100%;
      bottom: 0;
      -webkit-transition: all .2s ease-out;
      -o-transition: all .2s ease-out;
      transition: all .2s ease-out
    }

    .d09hF {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-flow: wrap column;
      flex-flow: column wrap;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      background-color: #fafafa;
      display: inline-grid;
      top: auto;
      width: 80rem;
      height: 0;
      bottom: -100%;
      position: absolute;
      z-index: 2;
      right: auto;
      left: 50%;
      margin-left: -40rem;
      padding-top: 5rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      -webkit-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s
    }

    ._3Dio9 {
      height: 100%;
      bottom: 0;
      overflow-y: auto;
      -webkit-transition: all .2s ease-out;
      -o-transition: all .2s ease-out;
      transition: all .2s ease-out;
      border-radius: 1rem 1rem 0 0
    }

    ._1I2Bu {
      border-radius: 10rem;
      background-color: linear-gradient(270deg, #8b00af, #d40062);
      width: 47.5rem;
      height: 6rem;
      margin: 2rem auto 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 2rem;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      text-decoration: none;
      position: fixed;
      bottom: -6rem;
      left: 0;
      right: 0;
      -webkit-transition: all .1s;
      -o-transition: all .1s;
      transition: all .1s
    }

    ._3Dio9 ._1I2Bu {
      bottom: 2rem;
      -webkit-transition: all .5s .5s;
      -o-transition: all .5s .5s;
      transition: all .5s .5s
    }

    .iPzoQ {
      font-size: 2rem
    }

    ._1cmX2 {
      height: 6rem;
      border-radius: 1rem 1rem 0 0;
      background-color: #fff;
      border-bottom: .1rem solid #e9e9e9;
      width: 80rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: wrap row;
      flex-flow: row wrap;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      z-index: 3
    }

    ._3Y9Cg {
      display: inline-block
    }

    ._1E8de {
      width: 1.9rem;
      height: 1.9rem
    }

    .pn0YP {
      margin-top: 4rem
    }

    .iGRgN, .pn0YP {
      text-align: right
    }

    ._2jQbq {
      font-size: 1.5rem
    }

    ._gQQt {
      font-size: 2rem
    }

    ._2SF-E {
      position: relative;
      left: 0
    }

    .bqt7P {
      font-size: 2rem
    }

    ._1Oq8f {
      font-size: 1.56rem
    }

    ._1bcy2 {
      width: 48%
    }

    ._1h3Bz {
      opacity: 0
    }

    ._1h3Bz, .ZTYpK ._1h3Bz {
      -webkit-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s
    }

    .ZTYpK ._1h3Bz {
      opacity: 1
    }
  }

  @media (min-width: 1025px) {
    ._1fAMr {
      height: 0;
      top: auto;
      width: 80rem;
      bottom: -100%;
      position: fixed;
      z-index: 2;
      right: auto;
      left: 50%;
      margin-left: -40rem;
      -webkit-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s
    }

    ._1fAMr, ._3Nt5j {
      overflow: hidden;
      background-color: #fafafa
    }

    ._3Nt5j {
      height: 70rem;
      bottom: 0;
      border-radius: 1rem 1rem 0 0;
      -webkit-transition: all .2s ease-out;
      -o-transition: all .2s ease-out;
      transition: all .2s ease-out
    }

    .d09hF {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-flow: wrap column;
      flex-flow: column wrap;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      display: inline-grid;
      top: auto;
      width: 80rem;
      height: 0;
      bottom: 0;
      z-index: 2;
      right: auto;
      left: 50%;
      margin-left: -40rem;
      padding-top: 5rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s
    }

    ._3Dio9 {
      height: 70rem;
      overflow-y: auto;
      -webkit-transition: all .2s ease-out;
      -o-transition: all .2s ease-out;
      transition: all .2s ease-out;
      border-radius: 1rem 1rem 0 0
    }

    ._1h3Bz {
      opacity: 0
    }

    ._1h3Bz, .ZTYpK ._1h3Bz {
      -webkit-transition: all .2s;
      -o-transition: all .2s;
      transition: all .2s
    }

    .ZTYpK ._1h3Bz {
      opacity: 1
    }
  }

  @media (max-height: 768px) {
    ._3Nt5j {
      background-color: #fafafa;
      overflow: hidden
    }

    ._3Dio9, ._3Nt5j {
      height: 100%;
      bottom: 0;
      -webkit-transition: all .2s ease-out;
      -o-transition: all .2s ease-out;
      transition: all .2s ease-out
    }

    ._3Dio9 {
      overflow-y: auto
    }
  }

  ._1sKBE {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  .zhfRm {
    width: 100%
  }

  .J7SDA {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-bottom: 1.6px solid #e9e9e9;
    border-bottom: .1rem solid #e9e9e9;
    height: auto;
    width: auto;
    padding: 16px 0;
    padding: 1rem 0
  }

  .J7SDA:first-of-type {
    padding-top: 0
  }

  .-fD9O {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
  }

  .-fD9O, .uO1tg {
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .uO1tg {
    border-radius: 5rem;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: auto;
    position: relative;
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
  }

  ._1Yt4C {
    font-size: 32px;
    font-size: 2rem;
    color: #05da78;
    outline: none;
    background-color: transparent;
    font-weight: 100;
    cursor: pointer;
    line-height: .4;
    position: absolute;
    top: 0;
    width: 48px;
    width: 3rem;
    height: 48px;
    height: 3rem;
    border: 1.6px solid #05da78;
    border: .1rem solid #05da78;
    border-radius: 100%
  }

  ._2S7x4 {
    left: 0
  }

  .riRvs {
    right: 0
  }

  ._1Yt4C:disabled {
    color: #e9e9e9
  }

  ._1XalX {
    font-size: 24px;
    font-size: 1.5rem;
    color: #4a4a4a;
    font-weight: 700;
    line-height: 48px;
    line-height: 3rem
  }

  .g8RNP {
    font-size: 22.4px;
    font-size: 1.4rem;
    color: #4a4a4a;
    display: inline-block;
    font-weight: 300;
    overflow: auto;
    -o-text-overflow: clip;
    text-overflow: clip;
    white-space: normal;
    text-align: right;
    width: 100%;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    margin-bottom: 16px;
    margin-bottom: 1rem
  }

  .tSt75 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
  }

  ._2HD1b {
    font-size: 19.2px;
    font-size: 1.2rem;
    color: #4a4a4a;
    font-weight: 700
  }

  ._2E8ye {
    font-style: normal;
    color: #4a4a4a;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    margin-right: 1.6px;
    margin-right: .1rem
  }

  @media (min-width: 769px) {
    .-fD9O {
      display: block;
      width: auto;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row
    }

    .g8RNP {
      font-size: 1.6rem;
      color: #4a4a4a;
      display: inline-block;
      margin: 0 1.2rem 0 auto;
      font-weight: 300;
      overflow: visible;
      -o-text-overflow: clip;
      text-overflow: clip;
      white-space: nowrap;
      width: auto;
      -webkit-box-ordinal-group: inherit
    }

    .g8RNP, .uO1tg {
      -ms-flex-order: inherit;
      order: inherit
    }

    .uO1tg {
      border-radius: 5rem;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 12rem
    }

    .tSt75, .uO1tg {
      -webkit-box-ordinal-group: inherit
    }

    .tSt75 {
      -ms-flex-order: inherit;
      order: inherit
    }

    ._1Yt4C {
      line-height: 1.5
    }

    ._2HD1b {
      font-size: 1.5rem
    }

    .J7SDA {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: wrap row;
      flex-flow: row wrap;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      border-bottom: .1rem solid #e9e9e9;
      height: 5rem;
      width: auto;
      padding: 1rem 0
    }
  }

  ._2C9wv {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    margin-top: 16px;
    margin-top: 1rem
  }

  .FUjEE {
    margin-left: 6.4px;
    margin-left: .4rem;
    margin-bottom: 6.4px;
    margin-bottom: .4rem
  }

  ._3k4tx {
    background-color: #fff;
    border-radius: .5rem;
    border: 1.6px solid #e9e9e9;
    border: .1rem solid #e9e9e9;
    margin: 0 auto;
    width: 100%;
    padding: 24px;
    padding: 1.5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  ._3k4tx > div:last-of-type {
    display: none
  }

  ._3k4tx label {
    top: 33.6px;
    top: 2.1rem;
    color: #202020
  }

  ._3k4tx input {
    border-bottom: none;
    padding: 32px 56px 32px 0;
    padding: 2rem 3.5rem 2rem 0
  }

  ._3k4tx input:focus ~ label {
    display: none
  }

  ._1_iwX {
    text-align: center;
    position: relative
  }

  ._1_iwX svg {
    position: absolute;
    top: 50%;
    right: 8px;
    right: .5rem
  }

  ._31Ezl {
    margin-left: 8px;
    margin-left: .5rem
  }

  ._1uXEE {
    display: inline-block;
    background-color: #fff;
    border-radius: 10rem;
    padding: 6.4px 16px;
    padding: .4rem 1rem;
    border: 1.6px solid #e2e2e2;
    border: .1rem solid #e2e2e2
  }

  ._1SDUd:hover {
    cursor: pointer;
    background-color: #5890ff;
    color: #fff
  }

  ._1SDUd:active {
    background-color: #fff;
    color: #000
  }

  ._2UPsu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 81.6px;
    height: 5.1rem
  }

  ._2UPsu .avnvp label {
    right: 16px;
    right: 1rem;
    color: #d40062 !important
  }

  ._2UPsu .avnvp label:hover {
    cursor: pointer
  }

  ._3sBc3 {
    width: 100%
  }

  ._18e9g {
    color: #d40062;
    margin-right: 16px;
    margin-right: 1rem;
    margin-bottom: 16px;
    margin-bottom: 1rem
  }

  ._1UyNf {
    background-color: #fff;
    border-radius: .5rem;
    border: 1.6px solid #e9e9e9;
    border: .1rem solid #e9e9e9
  }

  ._4rOEr {
    -ms-flex-preferred-size: 60%;
    flex-basis: 60%
  }

  ._4rOEr input {
    border-bottom: none;
    background-color: transparent !important;
    cursor: text
  }

  ._4rOEr input:focus::-webkit-input-placeholder {
    opacity: 1;
    color: #e9e9e9
  }

  ._4rOEr input:focus:-ms-input-placeholder {
    opacity: 1;
    color: #e9e9e9
  }

  ._4rOEr input:focus::placeholder {
    opacity: 1;
    color: #e9e9e9
  }

  ._4rOEr label {
    top: 22.4px;
    top: 1.4rem
  }

  ._4rOEr span {
    display: none
  }

  ._39Sp9 {
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
    text-align: left
  }

  ._1sFsP {
    width: 148.8px;
    width: 9.3rem;
    height: 60.64px;
    height: 3.79rem;
    border-radius: .4rem;
    background: -webkit-gradient(linear, right top, left top, from(#8b00af), to(#d40062));
    background: -webkit-linear-gradient(right, #8b00af, #d40062);
    background: -o-linear-gradient(right, #8b00af, #d40062);
    background: linear-gradient(270deg, #8b00af, #d40062);
    -webkit-box-shadow: 0 .4rem 1rem 0 rgba(0, 0, 0, .2);
    box-shadow: 0 .4rem 1rem 0 rgba(0, 0, 0, .2);
    font-size: 22.4px;
    font-size: 1.4rem;
    line-height: 1.71;
    color: #fafafa;
    margin-left: 8px;
    margin-left: .5rem
  }

  ._1sFsP:active, ._1sFsP:focus {
    border: none;
    outline: none
  }

  ._2sIS3 {
    border-radius: 10rem;
    background-color: #fafafa;
    margin: 0 0 16px;
    margin: 0 0 1rem;
    padding: 8px 16px;
    padding: .5rem 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap row;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    border: 1px solid #e9e9e9
  }

  ._2ZlFw {
    font-size: 27.2px;
    font-size: 1.7rem;
    color: #202020;
    margin-left: 8px;
    margin-left: .5rem;
    background-color: transparent
  }

  ._2ZlFw, ._3mATY {
    line-height: 1.71;
    text-align: right;
    display: inline-block
  }

  ._3mATY {
    font-size: 22.4px;
    font-size: 1.4rem;
    color: #4a4a4a
  }

  .SAtLc {
    font-size: 20.8px;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.54;
    text-align: left;
    color: #4a4a4a
  }

  ._2P7vW {
    color: #cbcbcb;
    text-decoration: line-through
  }

  .avnvp {
    margin-bottom: 0
  }

  .avnvp div:last-of-type {
    display: none !important
  }

  .avnvp input {
    border-bottom: none;
    padding-right: 0;
    cursor: pointer
  }

  .avnvp label {
    right: 16px;
    right: 1rem;
    color: #d40062 !important;
    display: block
  }

  .avnvp span {
    display: none
  }

  ._3aM_U {
    color: #9b9b9b;
    position: relative;
    z-index: 130
  }

  ._3aM_U a {
    text-decoration: none;
    color: #9b9b9b
  }

  ._2wA5P {
    background-color: #202020;
    padding-top: 112px;
    padding-top: 7rem;
    padding-bottom: 80px;
    padding-bottom: 5rem
  }

  ._2wA5P, ._3CfYe {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  ._3CfYe {
    padding: 48px 0 32px;
    padding: 3rem 0 2rem;
    background-color: #191919;
    text-align: center
  }

  ._3CfYe p {
    margin-top: 16px;
    margin-top: 1rem;
    direction: ltr
  }

  ._10xSL {
    margin: 0 auto
  }

  ._1K1uT {
    text-align: center
  }

  ._1K1uT p {
    margin-bottom: 16px;
    margin-bottom: 1rem
  }

  .L-wLr {
    width: 216px;
    width: 13.5rem;
    height: 56px;
    height: 3.5rem
  }

  ._3LiQI {
    text-align: center
  }

  ._3-kHH, ._3LiQI {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  ._3-kHH {
    margin: 56px auto 64px;
    margin: 3.5rem auto 4rem;
    padding-top: 32px;
    padding-top: 2rem
  }

  ._3-kHH:before {
    height: 4.8px;
    height: .3rem;
    content: "";
    position: relative;
    bottom: 40px;
    bottom: 2.5rem
  }

  ._2NHIC {
    color: #fff;
    margin-bottom: 24px;
    margin-bottom: 1.5rem
  }

  ._2ZhvT:before {
    background: #ffc300
  }

  ._11zkQ:before {
    background: #ff0613
  }

  ._3ohPJ:before {
    background: #d40062
  }

  ._3ytBt:before {
    background: #8b00af
  }

  ._1lxJb {
    display: none
  }

  ._3tQEG {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    margin: auto
  }

  ._1T9aK {
    cursor: pointer;
    margin: 0 auto;
    vertical-align: middle
  }

  ._1T9aK:first-of-type {
    margin-bottom: 32px;
    margin-bottom: 2rem
  }

  ._36S-g {
    color: #5890ff !important
  }

  @media (min-width: 769px) {
    ._1lxJb {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    ._3tQEG {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap
    }

    ._1T9aK:first-of-type {
      margin-left: 2rem;
      margin-bottom: 0
    }
  }

  @media (max-width: 940px) and (min-width: 768px) {
    ._2NHIC {
      font-size: 1.2rem
    }

    ._3aM_U a {
      font-size: 1.1rem
    }

    ._3LiQI {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
      width: 100%
    }
  }

  @media (max-width: 1024px) {
    ._3-kHH {
      min-width: 20rem
    }
  }

  @media (min-width: 1025px) {
    ._1K1uT {
      text-align: right;
      min-width: 22rem;
      -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
      margin-right: 0
    }

    ._3CfYe {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse
    }

    ._3CfYe p {
      margin-left: auto
    }

    ._10xSL {
      margin: 0
    }

    ._1WL1U {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-preferred-size: 70%;
      flex-basis: 70%;
      max-width: 80rem
    }

    ._2wA5P {
      padding-top: 5rem;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row
    }

    ._3-kHH {
      margin: 0 1.5rem;
      -webkit-box-flex: 1;
      -ms-flex: 1 1;
      flex: 1 1;
      text-align: right
    }

    ._3LiQI {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
      width: 100%
    }

    ._1K1uT {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -ms-flex-line-pack: start;
      align-content: flex-start;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      padding-left: 2.5rem
    }
  }

  .NnwDr {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: inline-block
  }

  .NnwDr, .NnwDr ul {
    width: 208px;
    width: 13rem
  }

  .NnwDr ul {
    margin: 0 auto
  }

  ._3-d4x {
    margin: 8px auto;
    margin: .5rem auto;
    border: 1px solid #4a4a4a;
    border-radius: .4rem;
    width: 208px;
    width: 13rem;
    height: 64px;
    height: 4rem;
    background-size: 13rem 4rem
  }

  ._3wQS4 {
    background-image: url("https://dist.reyhoon-static.com/web-assets/images/app-links/cafebazaar-dark.png?x-oss-process=image/resize,w_180")
  }

  ._1lYpE {
    background-image: url("https://dist.reyhoon-static.com/web-assets/images/app-links/apple-store-dark.png?x-oss-process=image/resize,w_180")
  }

  ._3LgFH {
    background-image: url("https://dist.reyhoon-static.com/web-assets/images/app-links/google-play-dark.png?x-oss-process=image/resize,w_180")
  }

  .Ba0fQ {
    background-image: url("https://dist.reyhoon-static.com/web-assets/images/app-links/sib-app-dark.png?x-oss-process=image/resize,w_180")
  }

  .gh3gZ {
    background-image: url("https://dist.reyhoon-static.com/web-assets/images/app-links/ios-direct-dark.png?x-oss-process=image/resize,w_180")
  }

  .WVQw_ {
    display: inline-block;
    width: 208px;
    width: 13rem;
    height: 64px;
    height: 4rem
  }

  ._2PgwK {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  ._3iZ2d {
    margin-left: 32px;
    margin-left: 2rem
  }

  ._3iZ2d:last-of-type {
    margin-left: 0
  }

  .pBQbx {
    color: #fff;
    vertical-align: middle;
    width: 220.8px;
    width: 13.8rem;
    height: 64px;
    height: 4rem;
    border-radius: 2rem;
    margin-left: 16px;
    margin-left: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none
  }

  ._1rcdz {
    width: auto
  }

  ._3eEld {
    color: #fff;
    vertical-align: middle;
    height: 64px;
    height: 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
    width: 64px;
    width: 4rem;
    border-radius: 50%
  }

  ._2EOWq {
    font-weight: 700;
    display: none
  }

  @media (min-width: 769px) {
    ._2EOWq {
      display: block
    }

    ._3eEld {
      border-radius: 2rem;
      width: 13.8rem
    }

    ._3iZ2d {
      margin-left: 1rem
    }
  }

  .GI7Iq {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  ._2bClH {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  ._3-VrG {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

  .dvLs8 {
    display: inline-block;
    width: 40px;
    width: 2.5rem;
    height: 40px;
    height: 2.5rem
  }

</style>
