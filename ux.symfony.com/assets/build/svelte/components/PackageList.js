/* generated by Svelte v3.59.1 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
	create_animation,
	create_in_transition,
	detach,
	element,
	empty,
	fix_and_destroy_block,
	fix_position,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	set_style,
	space,
	src_url_equal,
	text,
	transition_in,
	update_keyed_each
} from "svelte/internal";

import { fade } from 'svelte/transition';
import { flip } from 'svelte/animate';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (13:0) {:else}
function create_else_block(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_value = /*packages*/ ctx[0];
	const get_key = ctx => /*uxPackage*/ ctx[1].name;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div, "class", "row");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}
		},
		p(ctx, dirty) {
			if (dirty & /*packages*/ 1) {
				each_value = /*packages*/ ctx[0];
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, fix_and_destroy_block, create_each_block, null, get_each_context);
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
			}
		},
		i(local) {
			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}
		},
		o: noop,
		d(detaching) {
			if (detaching) detach(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

// (9:0) {#if packages.length === 0}
function create_if_block(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.textContent = "Sad trombone... we haven't built any components that\n        match this search yet!";
			attr(div, "class", "alert alert-info");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (15:8) {#each packages as uxPackage(uxPackage.name)}
function create_each_block(key_1, ctx) {
	let a;
	let div2;
	let div1;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let h4;
	let t1_value = /*uxPackage*/ ctx[1].humanName + "";
	let t1;
	let t2;
	let a_href_value;
	let a_intro;
	let rect;
	let stop_animation = noop;

	return {
		key: key_1,
		first: null,
		c() {
			a = element("a");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			h4 = element("h4");
			t1 = text(t1_value);
			t2 = space();
			attr(img, "width", "17");
			attr(img, "height", "17");
			if (!src_url_equal(img.src, img_src_value = /*uxPackage*/ ctx[1].imageUrl)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = "`Image for the " + /*uxPackage*/ ctx[1].humanName + " UX package`");
			attr(div0, "class", "live-component-img d-flex justify-content-center align-items-center");
			set_style(div0, "background", /*uxPackage*/ ctx[1].gradient);
			attr(h4, "class", "ubuntu-title ps-2 align-self-center");
			attr(div1, "class", "d-flex");
			attr(div2, "class", "components-container p-2");
			attr(a, "href", a_href_value = /*uxPackage*/ ctx[1].url);
			attr(a, "class", "col-12 col-md-4 col-lg-3 mb-2");
			this.first = a;
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, div2);
			append(div2, div1);
			append(div1, div0);
			append(div0, img);
			append(div1, t0);
			append(div1, h4);
			append(h4, t1);
			append(a, t2);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*packages*/ 1 && !src_url_equal(img.src, img_src_value = /*uxPackage*/ ctx[1].imageUrl)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*packages*/ 1 && img_alt_value !== (img_alt_value = "`Image for the " + /*uxPackage*/ ctx[1].humanName + " UX package`")) {
				attr(img, "alt", img_alt_value);
			}

			if (dirty & /*packages*/ 1) {
				set_style(div0, "background", /*uxPackage*/ ctx[1].gradient);
			}

			if (dirty & /*packages*/ 1 && t1_value !== (t1_value = /*uxPackage*/ ctx[1].humanName + "")) set_data(t1, t1_value);

			if (dirty & /*packages*/ 1 && a_href_value !== (a_href_value = /*uxPackage*/ ctx[1].url)) {
				attr(a, "href", a_href_value);
			}
		},
		r() {
			rect = a.getBoundingClientRect();
		},
		f() {
			fix_position(a);
			stop_animation();
		},
		a() {
			stop_animation();
			stop_animation = create_animation(a, rect, flip, { duration: transitionDuration });
		},
		i(local) {
			if (!a_intro) {
				add_render_callback(() => {
					a_intro = create_in_transition(a, fade, { duration: transitionDuration });
					a_intro.start();
				});
			}
		},
		o: noop,
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*packages*/ ctx[0].length === 0) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i(local) {
			transition_in(if_block);
		},
		o: noop,
		d(detaching) {
			if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

let transitionDuration = 200;

function instance($$self, $$props, $$invalidate) {
	let { packages = [] } = $$props;

	$$self.$$set = $$props => {
		if ('packages' in $$props) $$invalidate(0, packages = $$props.packages);
	};

	return [packages];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { packages: 0 });
	}
}

export default Component;