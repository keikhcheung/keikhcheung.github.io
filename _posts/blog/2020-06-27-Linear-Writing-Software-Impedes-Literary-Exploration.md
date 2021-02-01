---
layout:    post
category:  'blog'
title:     Linear Writing Software Impedes Literary Exploration
image:     '/images/blog/LWrit-Writing.jpg'
lead:      Thinking is not a linear process, nor shall writing be. Why do digital writing apps make it so? 
tags:
  - writing
  - collaboration
  - workspace
  - information-architecture
  - digital-playground
  - product
---

-------

**Thinking is not a linear process, nor is writing.**

We may start with a certain set of ideas and explicate them in one vocabulary. Others may sprout later, and we would similarly try to verbalise them. These latecomers—as new input—would open up new potential and provoke us to reflect on the previously written text, which leads to altering our narrative.

Hence, <mark>writing is often a process of back and forth.</mark> It is an experiment where you connect different elements and see how they go. It is akin to chemical lab test. Putting elements A and B may give a spark. It may make shiny crystals. Maybe also a kaboom or nothing at all.

When we write, we are exploring the magic of words and connecting them to thoughts. There are hundreds—if not thousands—of possibilities.

{% include figure.html
    src="/images/blog/LWrit-Alternative.jpg"
    alt="Pizza is nice. Ramen is better. Good. Pizza is delicious. Ramen is scrumptious. Even better."
    caption="Exploring writing alternative with different vocabularies."
%}

If you are self-demanding or collaborating on a common project, you want to be able to <mark>observe and compare different variations</mark>, maybe against a base control, before drawing a conclusion as final.

This is where digital writing software falls short.

-------

## Shortcomings in Writing Software

### Linear Workspace

Writing software in the market, still very much shadowed by typewriters from the last century, asks us to write as we typeset. It is made for the expression of ideas in a single, linear stream of texts. <mark>Writing on these programs is comparable to reading your thoughts or speaking them aloud</mark>—from the start to the end, one direction, along the brook of narrative.

### Programs for Editing, Not Writing

When we write, these writing programs allow us to flexibly jump back and forth to add and delete words. We can tune, correct and revise written material easily.

Real-time, *in situ* changes are good for small modifications, especially for relatively uncomplicated ideas in a limited space. Such modifications are directly incorporated in the original stream upon edit.

But when the adjustment is larger, it soon becomes more problematic.

<mark>They are editing programs, not writing programs.</mark>

### Single-Minded

By limiting us to have one single text stream, writing software is making it difficult to produce alternatives for literary exploration. If we want to try out a different writing style or attempt an elaboration variant for a certain paragraph or chapter, we would have to either *make copies* of the current document and manually converge applicable parts later, or *inject variants* directly into the text stream and break the narrative flow.

The complexity multiplies with the number of variations you are making and the number of collaborators you work with.

<mark>Writing software is single-minded</mark>: keeping a single text stream, a single active version in place, and a single player on writing.

Writing software is **detached from the actual writing workflow and cumbersome for collaboration.**

-------

## Limitations on Revision & Multiplayer Writing

### Visually Redundant

We may use features like commenting, suggestion and change tracking. These are good add-ons but also just for *small modifications*. If the scope exceeds a few words or spans across sentences (or paragraphs), these features become fuzzier than helpful. They lay highlights across half of the page or draw red lines under every single sentence. <mark>The distraction drifts the focus away</mark> from the subject text and hinders thinking.

![A lot of highlights, comments and suggestions on the subject text. It's hard to focus on reading or writing.](/images/blog/LWrit-Visual-Redundancy.jpg)
<div class="extras cap" markdown="1">
An example of working on Google Docs. When it is a heavily amended, visual redundancy is severe. You could hardly focus on reading or writing. (Draft for [PlayBase Medium post][PlayBase Medium]{:target="_blank"})
</div>

### Contextually Dependent & Source-Bound

At times, a point which invokes comments may not be the actual place where modifications happen. A weak grist amidst the elaboration of an idea may lead to some further introduction paragraphs preceding the point of remark. <mark>It is not possible to re-factor comments</mark> to direct them to the new changes applied. They are forever stuck with the origin instance.

### Inaccurate upon Modification

Once we begin to modify the text, these comments become irrelevant as the new version renders the old texts and the ideas they carry with refreshed context. To make updates clear for self-reference or everyone in collaboration, we would have to resolve/disable those comments if we have fully finished working on them. Otherwise, if they are only partly tackled, or if we still want to keep them open for additional approaches to the solution, these old comments would now be glued to the newly amalgamated texts. <mark>The remarks they carry become deviated.</mark>

Comments may even disappear if you rewrite the portion to which they are attached, leaving no trace of idea evolution visible subsequently.

Comments, suggestions, change tracking are all drawn to the linear stream of text. They cannot **stay afloat of the subject text.**

-------

## Thoughts on Possible Improvements
As Ryan Singer [tweeted][Tweet 1]{:target="_blank"}: When designers work on visual exploration, we put variations side by side on a canvas to compare versions. Can digital writing not handle literary exploration and alternatives similarly, while keeping the original narrative intact and without leaving the current copy?

![Variations of an app screen juxtaposed next to each other.](/images/blog/LWrit-Explore-Design.jpg)
<div class="extras cap" markdown="1">
Juxtaposing variations of a screen before deciding on a final design is a frequent approach amongst designers. ([Project Athens][Athens]{:target="_blank"})
</div>

Developers use Git to track changes and diffs. They fork out branches, make variations, push and compare versions later before merging pull requests. Likewise in managing a design system, alternative components can be explored, compared and reviewed, before publishing changes to affect the overall design. Can we make use of the same technology/method for digital writing?

{% include figure.html
    src="/images/blog/LWrit-Explore-Code.jpg"
    alt="Variations of code juxtaposed next to each other."
    caption="Before merging a pull request, GitHub juxtaposes diffs in code review."
%}

For a collaborative workflow, can we supply context-related comments while maintaining different versions? Can comments and suggestions stay on top of and across variations? This can be particularly practical for exploration and version comparison, letting us keep track of how ideas and texts evolve, before finalising a concluded version.

<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">Progress turning the writing idea above into an app concept. Alternate versions of compositions, blocks and inline text are substituted in the main text via reference symbols. Any text is a composite of plain text and referenced text. References can be used anywhere. <a href="https://t.co/UV0vAczgbX">pic.twitter.com/UV0vAczgbX</a></p>&mdash; Ryan Singer (@rjs) <a href="https://twitter.com/rjs/status/1251927254088560640?ref_src=twsrc%5Etfw">April 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Co-authoring, peer review and progressive tuning can be carried out where originals, new input and successive changes can all be pertinently linked and neatly set apart, whilst maintaining the stream of the overall narrative as we read.

[PlayBase Medium]: https://medium.com/denkwerk-stories/the-base-for-your-date-workshop-c7adbc6370e
[Tweet 1]: https://twitter.com/rjs/status/1130603817605558272
[Athens]: https://github.com/athensresearch/athens
